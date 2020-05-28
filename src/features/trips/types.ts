// Type definitions for [WandersRV] [0.1]
// Project: [New Mapping Demo]
// Definitions by: [tim.rohrer] <[@tim_rohrer]>
import { v4 } from 'uuid/interfaces'

export type WandersUUID = string

/** @todo This needs to become a generated UUID */
export type WandersPlaceId = WandersUUID | string

/** @todo This needs to become a generated UUID */
export type WandersTripId = WandersUUID

/** A place abstraction for use in WandersRV to map to different location/place-providing APIs */
export interface WandersPlace {
    id: WandersPlaceId,
    latlng?: Object,
    googlePlaceId?: string
}

/**
 * Information describing routes from point A to point B, accounting for other stops as waypoints. 
 * Each route 
 * 
 */
export interface TripRoutingInfo {
    routingInfoId: WandersUUID,
    wandersRoutesInfo: object,
    googleRoutes: object,
    mapboxRoutes?: object,
}

/** 
 * Describes a trip for Wanders of varying stages of maturity
 * 
 * @todo Change structure to reflect factors such as miles or hours per day.
 * @todo Make orderedStops to be somehow checked, either one or more, or two or more stops
 * @todo Fix TripId so it is defined as a UUID
 * 
 * @property {WandersTripId} tripId - A UUID for the trip. May be "Draft" until added to store
 * @property {Array<WandersPlaceId>} orderedStops - WandersPlaceIds reflecting starting and ending points, and 
 * stops along the way. 
 * @property {number?} [noStopsDesired] - For demo, we use this to calculate stop solver positions
 * @property {TripRoutingInfo[]} [wandersTripRouting] - Possible routes to get from first to the last stop, via the intermediate stops.
 */
export interface WandersTrip {
    id: WandersTripId | "Draft",
    ownerId: WandersUUID,
    publiclyVisible: boolean
    orderedStops: Array<WandersPlaceId>,
    noStopsDesired?: number,
    wandersTripRouting?: Array<TripRoutingInfo>
}
