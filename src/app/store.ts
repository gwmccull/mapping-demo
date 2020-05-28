import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import systemReducer from '../features/system/systemSlice'
import tripsReducer from '../features/trips/tripsSlice'
import activeTripReducer from '../features/activeTrip/activeTripSlice'

export const reducer = {
  system: systemReducer,
  trips: tripsReducer,
  activeTrip: activeTripReducer
}

export const store = configureStore({
  reducer,
});

export const combinedReducer = combineReducers(
  reducer
)

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
