import { testPlaces } from './googlePlaceDetails';

export const setupGoogleMock = () => {
    /*** Mock Google Maps JavaScript API ***/
    const google = {
      maps: {
        places: {
          PlacesService: class { getDetails( placeId ) { 
            let placeDetails = testPlaces;
            return placeDetails }},
          PlacesServiceStatus: {
            INVALID_REQUEST: 'INVALID_REQUEST',
            NOT_FOUND: 'NOT_FOUND',
            OK: 'OK',
            OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
            REQUEST_DENIED: 'REQUEST_DENIED',
            UNKNOWN_ERROR: 'UNKNOWN_ERROR',
            ZERO_RESULTS: 'ZERO_RESULTS',
          },
        },
        Geocoder: () => {},
        GeocoderStatus: {
          ERROR: 'ERROR',
          INVALID_REQUEST: 'INVALID_REQUEST',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS',
        },
      },
    };
    global.window.google = google;
  };