import { getPlaceTypeConstantGivenAType } from './placeTypes';
// import { markerTypes } from './mapHelperUtilities';

/**
 * Google Markers
 * @module assets/googleMarkers
 * @author James Crain
 * @author Tim Rohrer (@tim_rohrer)
 * 
 * @desc These functions are specific to generating markers for use on 
 * a Google map. 
 */

/* eslint-disable no-undef */

/*  Summary:
    Constant list of our marker types. Used for distinguishing
    what type of map marker was acted, or need to be acted, upon.
*/
export const markerTypes = {
    tripStop: 'tripStop',
    stopSolver: 'stopSolver',
    stopSolverOvernight: 'stopSolverOvernight',
    searchResult: 'searchResult',
    tripStopPOI: 'tripStopPOI'
}
let requireImagePrefix = "";
let devicePixelRatio = (window.devicePixelRatio === undefined ? 1 : window.devicePixelRatio);

// Currently no 3x support.
// if(devicePixelRatio > 2) {
//   requireImagePrefix = "@3x";
// }
// else if(devicePixelRatio > 1) {
//   requireImagePrefix = "@2x";
// }

if (devicePixelRatio > 1) {
    requireImagePrefix = "@2x";
}

function getMapMarkerType(type: string, label: any) {
    if (type === "starting") {
        return "start";
    }
    else if (type === "stopping") {
        return "stop";
    }
    else if (type === "stopSolverIcon") {
        return "stopSolverIcon"
    }
    else if (type === "regular") {
        // This is really the Trip Stop number.
        return label;
    }
    else {
        let _placeType = getPlaceTypeConstantGivenAType(type)
        return _placeType.mapMarkerImageName;
    }
}

function getMarkerIcon(type: string, markerType: string, label: any) {

    let iconSize = new google.maps.Size(30, 59)
    let anchorPoint = new google.maps.Point(0,0)

    if (type === "starting" || type === "stopping") {
        iconSize = new google.maps.Size(49, 36)
    }

    let urlPrefix = "/images/"
    if (markerType === markerTypes.stopSolver) {
        urlPrefix += "ss_"
    }
    else if (markerType === markerTypes.tripStopPOI) {
        urlPrefix += "ts_"
    }
    else if (markerType === markerTypes.tripStop) {
        urlPrefix += "ts/ts_"
    }
    else if (markerType === markerTypes.stopSolverOvernight) {
        requireImagePrefix = ""
        iconSize = new google.maps.Size(33, 32.5)
        anchorPoint = new google.maps.Point(16,16)
    }

    let _url = urlPrefix + getMapMarkerType(type, label) + requireImagePrefix + ".png"

    return {
        url: _url,
        size: iconSize,
        scaledSize: iconSize,
        anchor: anchorPoint
    };
}

/** 
 *      let pinIcon = {
            url: "/images/stopSolverIcon.png",
            size: new google.maps.Size(33, 32.5),
            scaledSize: new google.maps.Size(33, 32.5),
            anchor: new google.maps.Point(16, 16)
        }
 */

export function getTripStopMarkerIconFromUrl(tripStopLabelShouldBe: string) {

    var iconSize = new google.maps.Size(30, 59);
    if (tripStopLabelShouldBe === "start" || tripStopLabelShouldBe === "stop") {
        iconSize = new google.maps.Size(49, 36);
    }

    // var cleansedTripStopLabel = tripStopNumberMinusOne;
    // if (tripStopNumberMinusOne === 0) {
    //     cleansedTripStopLabel = "start";
    // }
    // else if (isDestination) {
    //     cleansedTripStopLabel = "stop";
    // }

    let urlPrefix = "/images/ts/ts_";
    let _url = urlPrefix + tripStopLabelShouldBe + requireImagePrefix + ".png";

    return {
        url: _url,
        size: iconSize,
        scaledSize: iconSize
    };
}

/** @deprecated 
 * @todo If not deprecated, get rid of any
*/
// export function getCustomGoogleMapMarker(position: any, map: any, type: string, placeId: any, markerType: string, label: any) {

//     let markerIcon = getMarkerIcon(type, markerType, label);

//     var marker = new google.maps.Marker({
//         position: position,
//         map: map,
//         icon: markerIcon,
//         optimized: false,
//         draggable: false
//     });

//     if (placeId) {
//         let place = {
//             location: position,
//             placeId: placeId
//         }
//         marker.setPlace(place);
//     }

//     return marker;

// }

/**
 * Returns a unbounded Google marker with custom icon based on selected parameters.
 * If placeId is defined, will associate place information.
 *
 * @param {Object} latlngPosition - LatLng Literal
 * @param {String} type - ??? This doesn't work for me
 * @param {String} placeId - Google placeId
 * @param {Const} markerType - One of the marker type constants
 * @param {String} label - ???
 * 
 * @todo Re-type placeId away from any
 */
export const createUnboundedCustomGoogleMarker = (latlngPosition: google.maps.LatLngLiteral, type: string, placeId: any, markerType: string, label: string) : google.maps.Marker => {

    let markerIcon = getMarkerIcon(type, markerType, label)

    let marker = new window.google.maps.Marker({
        position: latlngPosition,
        icon: markerIcon,
        optimized: false,
        draggable: false
    })

    if (placeId) {
        let place = {
            location: latlngPosition,
            placeId: placeId
        }
        // marker.setPlace(place)
        marker.setPosition(place.location)
    }
    return marker
}