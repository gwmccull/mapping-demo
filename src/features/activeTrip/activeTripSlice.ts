import { WandersUUID, WandersTrip, WandersPlaceId } from "../trips/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"
import { store } from "../../app/store";

export interface ActiveTripState {
    id: WandersUUID | undefined,
    ownerId: WandersUUID | undefined,
    publiclyVisible: boolean,
    orderedStops: Array<WandersPlaceId> | null
    loading: "idle" | "pending"
    status: "draft" | "ready" | undefined
    currentRequestId: string | undefined
    error: string | null
}

const initialState: ActiveTripState = {
    id: undefined,
    ownerId: undefined,
    publiclyVisible: false,
    orderedStops: null,
    loading: "idle",
    status: undefined,
    currentRequestId: undefined,
    error: null
}

// Thunks
export const fetchGoogleRoutesForActiveTrip = createAsyncThunk(
    'activeTrip/fetchGoogleRoutes',
    async (orderedStops, thunkAPI) => {
        let res = await fetchGoogleRoutes(fmpRequestObject)
        return res.data
    }
)

// Reducer
export const activeTrip = createSlice({
    name: 'activeTrip',
    initialState,
    reducers: {
        newTripInitiated: state => {
            const newTrip : ActiveTripState = {
                id: uuidv4(),
                ownerId: store.getState().system.userId,
                publiclyVisible: false,
                orderedStops: null,
                loading: "idle",
                status: "draft",
                currentRequestId: undefined,
                error: null
            } 
            return newTrip
        },
        existingTripActivated: (state, action) => {
            const trip = action.payload
            return {
                ...state,
                id: trip.id,
                ownerId: trip.ownerId,
                publiclyVisible: trip.publiclyVisible,
                orderedStops: trip.orderedStops,
            }
        },
        activeTripAbandoned: state => {
            return initialState 
        },
        activeTripStatusChanged: (state, action) => {
            return {
                ...state,
                status: action.payload
            }
        }, 
        orderedStopsChanged: (state, action) => {
            const newOrderedStops = action.payload
            return {
                ...state,
                orderedStops: newOrderedStops,
                status: "draft"
            }
        },
        stopsDesiredChanged: (state, action) => {
            return {
                ...state,
                noStopsDesired: action.payload
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchGoogleRoutesForActiveTrip.pending, (state, action) => {
            if (state.loading === "idle") {
                return {
                    ...state,
                    loading: "pending",
                    currentRequestId: action.meta.requestId
                }
            }
        }),
        builder.addCase(fetchGoogleRoutesForActiveTrip.fulfilled, (state, action) => {

        })
    }
})

// Actions tripSelected, tripSelectedIsRevised, tripSelectedIsReadyForDisplay
export const { 
    newTripInitiated, 
    existingTripActivated, 
    activeTripAbandoned,
    activeTripStatusChanged,
    orderedStopsChanged,
    stopsDesiredChanged } = activeTrip.actions

// Selectors


export default activeTrip.reducer


// tripSelected: (state, action) => {
//     if (state.allTrips[action.payload] === undefined) {
//         return {
//             ...state
//         }
//     }
//     let trip = state.allTrips[action.payload]
//     let selectedTrip = {
//         id: trip.tripId,
//         details: trip,
//         isRevised: false,
//         isReadyForDisplay: false
//     }
//     return {
//         ...state,
//         selectedTrip: selectedTrip
//     }
// },
// tripSelectedIsRevised: (state, action) => {
//     return {
//         ...state,
//         selectedTrip: {
//             ...state.selectedTrip,
//             isRevised: action.payload
//         }
//     }
// },
// tripSelectedIsReadyForDisplay: (state, action) => {
//     return {
//         ...state,
//         selectedTrip: {
//             ...state.selectedTrip,
//             isReadyForDisplay: action.payload
//         }
//     }
// },