// import { createUnboundedCustomGoogleMarker, markerTypes } from './googleMarker' // need to move markerTypes

import { resolve } from "dns";

type GoogleDirectionsService = google.maps.DirectionsService;
type GoogleDirectionsResult = google.maps.DirectionsResult;
type GoogleDirectionsRequest = google.maps.DirectionsRequest;
type GoogleMarker = google.maps.Marker;
type LatLngLiteral = google.maps.LatLngLiteral;
type LatLng = google.maps.LatLng;

// type GoogleDirectionsRenderer = google.maps.DirectionsRenderer

/**
 * Google Utilities
 * @module assets/googleUtilities
 * @author Tim Rohrer (@tim_rohrer)
 *
 * @desc These utility functions generally depend upon Google services or the map object.
 * In some cases, they are used to remove the Google dependency so generic functions can be
 * invoked.
 *
 */

interface GenerateRouteAndStopSolverMarkerPointsParameters {
  noStopsDesired: number;
  routeDistanceArray: Array<any>;
  tripRoutesInfo: Array<any>;
}

/**
 * Provides the options necessary to create markers for route and stop solver positions, determined
 * in kilometers, along each provided route
 *
 * @param {Number} noStopsDesired - Integer representing the number of stops the user has requested.
 * @param {Array<any>} routeDistanceArray - I don't recall what this is to be clear.
 * @param {Array} tripRoutesInfo - Array of positions, at approximately every kilometer, along
 * Google's calculated routes for the selected trip.
 * @returns {Array<google.maps.Marker>} stopSolverMarkersByRoute - Array for routes' stop solver markers
 */
export function generateRouteAndStopSolverMarkerPoints(
  noStopsDesired: number,
  routeDistanceArray: Array<any>,
  tripRoutesInfo: Array<any>
): Array<Array<GoogleMarker>> {
  let kilometersPerDay = 0;
  let stopSolverMarkersByRoute: Array<Array<GoogleMarker>> = [];
  routeDistanceArray.forEach((routeDistance, routeDistanceIndx) => {
    kilometersPerDay = Math.round(routeDistance.value / noStopsDesired / 1000);
    // let positInfo = tripRoutesInfo[routeDistanceIndx]['startingPt']
    // let stopSolverPosits = [{
    //     positInfo: positInfo,
    //     marker: createUnboundedSimpleGoogleMarker(positInfo.posit)
    // }
    /**
     * @description aRoutesMarker is used to generate a marker for a specific stop in a route
     */
    let aRoutesMarkers: Array<GoogleMarker> = [
      createUnboundedCustomGoogleMarker(
        tripRoutesInfo[routeDistanceIndx]["startingPt"].posit,
        "starting",
        null,
        markerTypes.tripStop,
        "Beats Me!"
      ),
    ];
    // window.google.maps.event.addListener(aRoutesMarkers[0], 'click', function() {
    //     alert("here!")
    // })
    for (let i = 1; i < noStopsDesired; i++) {
      let distanceRef = kilometersPerDay * i;
      // positInfo = tripRoutesInfo[routeDistanceIndx][distanceRef]
      // stopSolverPosits.push({
      //     positInfo: positInfo,
      //     marker: createUnboundedSimpleGoogleMarker(positInfo.posit)
      // })
      // debugger
      aRoutesMarkers.push(
        createUnboundedCustomGoogleMarker(
          tripRoutesInfo[routeDistanceIndx][distanceRef].posit,
          "stopSolverIcon",
          null,
          markerTypes.stopSolverOvernight,
          i.toString()
        )
      );
    }
    // positInfo = tripRoutesInfo[routeDistanceIndx]['endingPt']
    // stopSolverPosits.push({
    //     positInfo: positInfo,
    //     marker: createUnboundedSimpleGoogleMarker(tripRoutesInfo[routeDistanceIndx]['endingPt'].posit)
    // })
    aRoutesMarkers.push(
      createUnboundedCustomGoogleMarker(
        tripRoutesInfo[routeDistanceIndx]["endingPt"].posit,
        "stopping",
        null,
        markerTypes.tripStop,
        "An Ending!"
      )
    );
    stopSolverMarkersByRoute.push(aRoutesMarkers);
  });
  return stopSolverMarkersByRoute;
}

// const googleMapsClient = require('@google/maps').createClient({
//     key:
// });

// export const myPlacesService = () => {
//     return googleMapsClient.place();

//     // const mapDiv = document.createElement('div');
//     // console.log(window.google);
//     // let pS = new window.google.maps(mapDiv);
//     // console.log(JSON.stringify(new window.google.maps.places.PlacesService(document.createElement('div'))));
//     // return new window.google.maps.places.PlacesService(document.createElement('div'));
// }

// export
/**
 * Animate the provided route.
 *
 * @param {object} map - A Google Map.
 * @param {Array} pathCoords - A set of latlng literals to animate
 * CURRENTLY UNUSED
 */
// const animateGoogleRoute = (map, pathCoords) => {
//     let i, route, marker, plotLat, plotLng;
//     const icon = new window.google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/micons/blue.png");
//     // Callback for setTimeout
//     const addPathLineAndUpateMarker = (coords) => {
//         plotLat = coords.lat
//         plotLng = coords.lng
//         route.getPath().push(new window.google.maps.LatLng(plotLat, plotLng));
//         moveMarker(map, marker, plotLat, plotLng);
//     }

//     route = new window.google.maps.Polyline({
//         path: [],
//         geodesic : true,
//         strokeColor: '#FF0000',
//         strokeOpacity: 1.0,
//         strokeWeight: 2,
//         editable: false,
//         map:map
//     });
//     marker=new window.google.maps.Marker({map:map, icon:icon});

//     for (i = 0; i < pathCoords.length; i++) {
//         setTimeout(addPathLineAndUpateMarker, 1 * i, pathCoords[i]);
//     }
// }

/**
 * Extracts all lat/lng points from the Google Route
 *
 * @param {Object} result - A Google DirectionsResult Object
 * @return {Array} routesPoints - All the latlng points for each route
 * @see {@link googleUtilities#extractOverviewPathFromGoogleRoutes}
 * @todo Validate this still does what I thought it would
 */
export const extractAllRoutePointsFromGoogleRoutes = (
  result: google.maps.DirectionsResult
): Array<Array<LatLng>> => {
  let routes = result.routes;
  let routesPoints: Array<Array<LatLng>> = [];
  routes.map((route, routeIndx) => {
    routesPoints[routeIndx] = [];
    // Each route may be comprised of multiple legs
    let legs = route.legs;
    legs.forEach((leg) => {
      // Each leg is comprised of steps
      let steps = leg.steps;
      steps.forEach((step, stepIndx) => {
        // Each step includes an array of latlng object functions. These are where we pull our points from
        // let lat_lngs = step.lat_lngs
        routesPoints[routeIndx].push(step.end_location);
        // let startLat = step.start_location
        // lat_lngs.forEach((lat_lng) => {
        //     let coordPoint = {lat: lat_lng.lat(), lng: lat_lng.lng()}
        //     routesPoints[routeIndx].push(coordPoint)
        // })
      });
    });
    // return routesPoints
  });
  return routesPoints; // An array for each route, consisting of all latlng points along that route.
};

// export
/**
 * Extracts lat/lng points from the Google DirectionsResult's overview_path
 *
 * @param {Object} result - A Google DirectionsResult Object
 * @returns {Array} routesPoints - The latlng point for each route's overview path
 * @see {@link googleUtilities#extractAllRoutePointsFromGoogleRoutes}
 */
// const extractOverviewPathFromGoogleRoutes = (result) => {
//     let routes = result.routes
//     let routesPoints: Array<LatLngLiteral> = []
//     routes.forEach((route, routeIndx) => {
//         // routesPoints[routeIndx] = []
//         let overviewPath = route.overview_path
//         // Each route has an overview path which includes an array of latlng object functions. These are where we pull our points from
//         overviewPath.forEach((point, pointIndx) => {
//             let coordPoint = {lat: point.lat(), lng: point.lng()}
//             routesPoints[routeIndx].push(coordPoint)
//         })
//     })
//     return routesPoints // An array for each route, consisting of all latlng points along that route.
// }

// export
/**
 * Repositions the existing marker based on the lat/lng.
 *
 * @function
 * @param {object} map - A Google Map.
 * @param {object} marker - Google Map marker.
 * @param {number} lat - A decimal number corresponding to the new latitude.
 * @param {number} lon - A decimal number corresponding to the new longitude.
 */
// const moveMarker = (map, marker, lat, lon) => {
//     marker.setPosition(new window.google.maps.LatLng(lat, lon));
//     // map.panTo(new window.google.maps.LatLng(lat, lon));
// }

/** Section: XX
 * Title: Fetches.
 *
 * Description: These asynchronous functionss obtain data from the various Google services
 *
 *
 */

/**
 * Fetches a distance matrix from Google using a client-side map object
 *  and their Distance Matrix Service.
 *
 * Requires an instance of Google's Distance Matrix Service and a
 *  trip object.
 *
 * For this function, the trip object must include "startingPlaceId"
 *  and "endingPlaceId".
 * CURRENTLY UNUSED
 */
// export const fetchGoogleDistanceAndTimeBetweenTwoPlaceIds = (distanceMatrixService, trip ) => {
//     const {startingPlaceId, endingPlaceId} = trip
//     return new Promise( (resolve, reject) => {
//         distanceMatrixService.getDistanceMatrix({
//             origins: [{placeId: startingPlaceId}],
//             destinations: [{placeId: endingPlaceId}],
//             travelMode: 'DRIVING'
//         },
//         (response, status) => {
//             if (status !== 'OK') {
//                 reject(status)
//             } else {
//                 resolve(response)
//             }
//         })
//     })
// };

export /**
 * Fetches available routes determined by Google using a cliend-side map object
 * and their Directions service.
 *
 * @param {Object} directionsService - Google's Directions service.
 * @param {PlaceId} startingPlaceId - Google's PlaceId that serves as the starting place.
 * @param {PlaceId} endingPlaceId - Google's PlaceId that serves as the ending place.
 * @return {Promise<Object>} - Resolves with Google DirectionsResult object.
 * @resolve {Object}
 * @reject {string}
 */
const fetchGoogleRoutes_OLD = (
  directionsService: GoogleDirectionsService,
  startingPlaceId: string,
  endingPlaceId: string
) => {
  return new Promise<GoogleDirectionsResult>((resolve, reject) => {
    let directionsRequest: GoogleDirectionsRequest = {
      origin: { placeId: startingPlaceId },
      destination: { placeId: endingPlaceId },
      // travelMode: google.maps.TravelMode.DRIVING,
      // transitOptions: TransitOptions,
      // drivingOptions: DrivingOptions,
      // unitSystem: google.maps.UnitSystem.METRIC,
      // waypoints: [{location: "San Antonio, TX"}],
      // optimizeWaypoints: Boolean,
      // provideRouteAlternatives: false,
      // avoidFerries: Boolean,
      // avoidHighways: Boolean,
      // avoidTolls: Boolean,
      // region: String
    };
    directionsService.route(
      directionsRequest,
      (
        result: google.maps.DirectionsResult,
        status: google.maps.DirectionsStatus
      ) => {
        if (status === "OK") {
          console.log("DirectionsResult Object: ", result);
          resolve(result);
        } else {
          reject(status);
        }
      }
    );
  });
};

/** Experimental fetch */
export async function fetchGoogleRoutes(
  directionsRequest: GoogleDirectionsRequest
) {
  try {
    const directionsService = new google.maps.DirectionsService();
    // console.log("fetch directionsService", directionsService)
    return new Promise<GoogleDirectionsResult>((resolve, reject) => {
      directionsService.route(directionsRequest, (result, status) => {
        console.log(result, status);
        if (status === "OK") {
          console.log("Here with data!");
          return resolve(result);
        } else {
          return resolve("WTF!");
        }
      });
    });
  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
}

/**
 *
 *
 * Requires the map object, and both the Directions Service and Renderer. The trip object
 * must contain the Google PlaceIds as startingPlaceId and endingPlaceId.
 *
 * For now, the travelMode is set to 'DRIVING'.
 * Alternative routes are provided.
 */
// export /**
//  * Displays the default route between the starting and ending locations for the trip.
//  *
//  * @param {*} map
//  * @param {*} directionsService
//  * @param {*} directionsRenderer
//  * @param {*} trip
//  * @deprecated
//  */
// const calculateAndDisplayRoute = (map, directionsService: GoogleDirectionsService, directionsRenderer: GoogleDirectionsRenderer, trip: { startingPlaceId: any; endingPlaceId: any }) => {
//     const {startingPlaceId, endingPlaceId} = trip
//     directionsService.route(
//         {
//             origin: {placeId: startingPlaceId},
//             destination: {placeId: endingPlaceId},
//             travelMode: 'DRIVING',
//             // transitOptions: TransitOptions,
//             // drivingOptions: DrivingOptions,
//             // unitSystem: UnitSystem,
//             // waypoints: [{location: "San Antonio, TX"}],
//             // optimizeWaypoints: Boolean,
//             provideRouteAlternatives: true,
//             // avoidFerries: Boolean,
//             // avoidHighways: Boolean,
//             // avoidTolls: Boolean,
//             // region: String
//         },
//         (result, status) => {
//           if (status === 'OK') {
//             directionsRenderer.setDirections(result);
//             // autoRefresh(map, result.routes[0].overview_path)

//             // console.log("The directions: ", response)
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//   }

/**
 * Fetches selected fields of Google details for a designated place
 *
 * @param {string} placeId - Google's PlaceId
 * @param {*} resolve - The Promise resolve function
 * @param {*} reject - The Promise reject function
 */
export const fetchGoogleDetailsForPlaceId = (
  placeId: string,
  resolve: Function,
  reject: Function
) => {
  let placesService = new window.google.maps.places.PlacesService(
    document.createElement("div")
  );
  placesService.getDetails(
    {
      placeId: placeId,
      fields: [
        "address_component",
        "adr_address",
        "formatted_address",
        "geometry",
        "icon",
        "name",
        "permanently_closed",
        "photo",
        "place_id",
        "plus_code",
        "type",
        "url",
        "vicinity",
      ],
    },
    (placeDetails, status) => {
      if (status === "OK") {
        resolve(placeDetails);
      } else {
        reject(status);
      }
    }
  );
  // })
};

// export /**
//  * Calculates route distance and duration using Google's previously calculated
//  * directions (steps)
//  *
//  * @param {Array} steps - Google's route directions/steps
//  * @returns {Array} totals - Contains the sum distance and time
//  *
//  * @deprecated
//  */
// const sumGoogleDistanceAndDurationFromRouteSteps = (steps) => {
//     let totalDistance = 0
//     let totalDuration = 0
//     steps.forEach((step, indx) => {
//         totalDistance += step.distance.value
//         totalDuration += step.duration.value
//     })
//     let totals = [totalDistance, totalDuration]
//     return totals
// }

// /**
//  * Function: determineCoordsForStopSolverWayPointsGoogle
//  * @deprecated
//  */
// export const determineCoordsForStopSolverWayPointsGoogle = (directions, kilometersPerDay) => {
//     let stepStartCoordsArray = []
//     directions.forEach((step, indx) => {
//         console.log(indx)
//         let stepStartCoords = {lat: step.start_location.lat(), lng: step.start_location.lng()}
//         let associatedLatLngs = step.lat_lngs
//         associatedLatLngs.forEach((x, i) => {
//             console.log(i,"----- ", x.lat(),", ",x.lng())
//         })
//         stepStartCoordsArray.push(stepStartCoords)
//         console.log(stepStartCoords, step)
//         debugger
//         // console.log("Start Loc: ",step.start_location.lat()," ", step.start_location.lng())
//         // console.log("Start Pt: ", step.start_point.lat()," ", step.start_point.lng())
//         // console.log("End Loc: ", step.end_location.lat(), " ", step.end_location.lng())
//         // console.log("End Pt: ", step.end_point.lat(), " ", step.end_point.lng())
//     })
//     console.log("Array of step coords: ", stepStartCoordsArray)
// }

// export const fetchGoogleDetailsForPlaceId = (placeId, resolve, reject) => {
//     let placesService = myPlacesService();
//     placesService.getDetails({ placeId: placeId }, function (placeDetails, status) {
//         if (status === 'OK') {
//             let googlePlaceDetails = {
//                 key: placeId,
//                 object: {
//                     placeId: placeId,
//                     name: placeDetails.name,
//                     address: placeDetails.formatted_address,
//                     phone: "",
//                     website: "",
//                     email: null,
//                     types: placeDetails.types,
//                     photos: placeDetails.photos,
//                     photo: "",
//                     geometry: placeDetails.geometry,
//                     position: "",
//                     reviews: placeDetails.reviews
//                 }
//             }

//             if (placeDetails.formatted_phone_number) {
//                 googlePlaceDetails.object.phone = placeDetails.formatted_phone_number
//             };

//             if (placeDetails.email) {
//                 googlePlaceDetails.object.email = placeDetails.email
//             }

//             if (placeDetails.website) {
//                 googlePlaceDetails.object.website = placeDetails.website
//             }

//             if (placeDetails.geometry.location.lat) {
//                 googlePlaceDetails.object.position = {
//                     lat: placeDetails.geometry.location.lat(),
//                     lng: placeDetails.geometry.location.lng()
//                 };
//             };

//             // [TGR_2/5/2019]: TODO: Make this random photo vice first
//             let photoUrl = '';
//             if (typeof placeDetails.photos !== 'undefined') {
//                 photoUrl = placeDetails.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 });
//             };
//             googlePlaceDetails.object.photo = photoUrl;
//             resolve(googlePlaceDetails);
//         } else {
//             // debugger;
//             // alert('No Details Available for the PlaceId');
//             // reject(status);
//         };
//     }) // end getDetails */
// }
