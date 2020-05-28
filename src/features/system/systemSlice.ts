import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

export type MappingService = "google" | "mapbox"

interface SystemState {
    userId: string
    appThinking: boolean,
    appLoaded: boolean,
    mappingResources: {
        google: boolean,
        mapbox: boolean
    },
    chosenMappingService: MappingService,
    mappingResourceRequestInProgress: boolean
}

const initialState: SystemState = {
    userId: "Demo",
    appThinking: false,
    appLoaded: false,
    mappingResources: {
        google: false,
        mapbox: false
    },
    chosenMappingService: "google",
    mappingResourceRequestInProgress: false
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        appIsLoaded: (state, action) => {
            return {
                ...state,
                appLoaded: action.payload
            }
        },
        appIsThinking: (state, action) => {
            return {
                ...state,
                appThinking: action.payload
            }
        },
        mappingResourceSet: (state, action) => {
            // if ( !(typeof action.payload.service) !(typeof MappingService) ) {
            //     debugger
            // }
            return {
                ...state, 
                [action.payload.service]: action.payload.availability
            }
        },
        mappingServiceChosen: (state, action) => {
            return {
                ...state,
                chosenMappingService: action.payload
            }
        },
        mappingResourceRequested: (state, action) => {
            return {
                ...state,
                mappingResourceRequestInProgress: action.payload
            }
        }
    }
})

// Actions
export const { appIsLoaded, appIsThinking, mappingResourceSet, mappingServiceChosen, mappingResourceRequested } = systemSlice.actions

// Thunks

// Selectors

export default systemSlice.reducer