import { createSlice, createSelector } from "@reduxjs/toolkit"
import { WandersTrip, WandersUUID, WandersTripId } from "./types"
import { RootState } from "../../app/store"
import { defaultTrip } from "../../common/demo-utils"

/**
 * Trips
 * @module features/trips
 * @author Tim Rohrer (@tim_rohrer)
 * 
 * @desc Trips contains Redux actions, reducers and values for all of the user's trips. 
 * @todo Separate dependence on any one mapping service.  
 * 
 */

interface TripsState {
    allTrips: { [ id: string ]: WandersTrip },
    loading: 'idle' | 'pending',
    storing: 'idle' | 'pending'
}

// Initial State
const initialState: TripsState = {
    allTrips: { [defaultTrip.id] : {
        ...defaultTrip
        }
    },
   loading: 'idle',
   storing: 'idle'
}

export const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        tripsLoaded: (state, action) => {
            return {
                ...state,
                tripsAreLoaded: action.payload
            }
        },
        tripAdded: (state, action) => {
            let tripId = action.payload.tripId
            return {
                ...state,
                allTrips: {
                    ...state.allTrips,
                    [tripId] : action.payload
                }
            }
        },
        tripRemoved: (state, action) => {
            let removalId: string = action.payload
            let newAllTrips = {...state.allTrips}
            delete newAllTrips[removalId]
            return {
                ...state,
                allTrips: newAllTrips
            }
        },
    }
})

// Actions
export const { tripsLoaded, tripAdded, tripRemoved } = tripsSlice.actions

// Thunks

// Selectors
// export const selectTripById = (tripId: WandersTripId) => (state: RootState) => state.trips.allTrips[tripId]
// export const allTripsSelector = createSelector(
//     (state: RootState) => state.trips,
//     allTrips => allTrips
// )
export const allTripsSelector = (state: RootState) => state.trips.allTrips

export const tripByIdSelectorFactory = (tripId: WandersTripId) => {
    return createSelector(
      allTripsSelector,
      tripId => trips[tripId]
    )
  }

export const tripByIdSelector = createSelector(
    tripByIdSelectorFactory,
    (tripId: WandersTripId) => trips[tripId]
)

// export {getAllTrips, selectAllTrips, selectTripById} = tripsSlice.selectors
// export const tripByIdSelector = createSelector(
//     [selectAllTrips],
//     (allTrips: { [x: string]: any }, tripId: string | number) => allTrips[tripId]
// )
// export const selectTripById = (tripId: WandersTripId) => createSelector(
//     selectAllTrips,
//     (tripId: WandersTripId) => allTrips[tripId]
// )

export default tripsSlice.reducer