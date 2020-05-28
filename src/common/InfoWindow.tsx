import React from 'react';
import { WandersTrip } from '../typings/Wanders';

type TripSummaryProps = WandersTrip

/**
 * Provides component for trip information
 *
 * @component
 * @param {Trip} tripInfo - This is not going to be the final
 * @todo Make generic!
 */
const InfoWindow = (tripInfo: TripSummaryProps) => {
    const {orderedStops} = tripInfo
    let startingPlaceId = orderedStops[0]
    let endingPlaceId = orderedStops[orderedStops.length-1]
    let routeDistance = {
        value: 99,
        text: "Please implement"
    }
    return (
        <div className="InfoWindow">
            <div className="trip-info-item">
                <span>
                    Starting PlaceId: 
                </span>
                <span>
                    {startingPlaceId}
                </span>
            </div>
            <div>
                <span>
                    Ending PlaceId:
                </span>
                <span>
                    {endingPlaceId}
                </span>
            </div>
            <div>
                <span>
                    Route Distance: 
                </span>
                <span>
                    { routeDistance !== undefined
                    ? routeDistance.text
                    : null}
                </span>
            </div>
        </div>
    )
}

export default InfoWindow;