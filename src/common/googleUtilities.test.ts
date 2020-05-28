// import { initialize } from '@googlemaps/jest-mocks'
import { defaultTrip } from "../common/demo-utils";
import { fetchGoogleRoutes } from "./googleUtilities";

class DirectionsService {
  constructor() {}
  route = jest.fn((request, callback: (result: any, status: any) => void) => {
    callback("result", "OK");
  });
}

global.google = {
  maps: {
    DirectionsService,
  },
};

describe("Google Utilities", () => {
  beforeEach(() => {
    // initialize()
  });

  it("loads the mock/stub for testing", async () => {
    const directionsService = new google.maps.DirectionsService();
    const directionsRequest: google.maps.DirectionsRequest = {
      origin: { placeId: defaultTrip.orderedStops[0] },
      destination: { placeId: defaultTrip.orderedStops[1] },
    };
    directionsService.route(directionsRequest, (result: any, status: any) => {
      console.log("The Result: ", result);
      console.log("The Status: ", status);
    });
    const actual = await fetchGoogleRoutes(directionsRequest);
    console.log("actual", actual);
  });
  // it('Performs magic', async () => {
  //     const google = {
  //         maps: {
  //             DirectionsService : {
  //                 route: jest.fn(),
  //                 etuor: jest.fn()
  //                 // .mockImplementation(
  //                 //   (request: google.maps.DirectionsRequest, callback): void => {
  //                 //     callback("The Result", "The Status");
  //                 //   }
  //                 // )
  //             }
  //         }
  //     }
  //     const directionsService = google.maps.DirectionsService
  //     console.log("Directions Service in test file: ", directionsService)
  //     // jest.mock('directionsService', () => ({
  //     //    route: jest.fn((request: google.maps.DirectionsService, callback) => callback('someData', 'someStatus'))
  //     //   }));
  //     jest.spyOn(google.maps.DirectionsService,'route')
  //         .mockImplementation((request: google.maps.DirectionsRequest, callback): void => {
  //         callback("The Result", "The Status");
  //       })

  //     directionsService.route("", (result: any, status: any) => {
  //        console.log(result)
  //        console.log(status)
  //     })
  //     const directionsRequest : google.maps.DirectionsRequest = {
  //         origin: {placeId: defaultTrip.orderedStops[0]},
  //         destination: {placeId: defaultTrip.orderedStops[1]},
  //     }

  //     const actual = await fetchGoogleRoutes(directionsRequest)
  //     // console.log("Actual: ", actual)
  // })

  // it('fetches routes using the DirectionsService', async () => {
  //     const directionsService = new google.maps.DirectionsService()
  //     console.log('directionsService.route: ', directionsService.route)
  //     // const routeSpy = jest.spyOn(directionsService, 'route')
  //     // console.log('routeSpy: ', routeSpy)
  //     // routeSpy.mockImplementation(() => {
  //     //     return {
  //     //         status: "OK",
  //     //         result: {
  //     //             directions: [1,2,3]
  //     //         }
  //     //     }
  //     // })
  //     const directionsRequest : google.maps.DirectionsRequest = {
  //         origin: {placeId: defaultTrip.orderedStops[0]},
  //         destination: {placeId: defaultTrip.orderedStops[1]},
  //     }
  //     // console.log(routeSpy.mock)
  //     // const actual = await fetchGoogleRoutes(directionsRequest)
  //     // console.log(actual)
  //     // expect(actual).toMatchObject(directionsRequest)
  //     await directionsService.route(directionsRequest, (result, status) => {
  //         console.log("Result: ",result)
  //         console.log("Status: ", status)
  //     })
  //     // routeSpy.mockImplementation(() => "OK")
  //     // const routeSpy = jest.spyOn(google.maps, 'DirectionsService')
  //     // console.log('Route spy: ', routeSpy)

  //     // expect.assertions(1)
  //     // const actual = await fetchGoogleRoutes(directionsService, defaultTrip.orderedStops[0], defaultTrip.orderedStops[1])
  //     // console.log(actual)
  // })
});
