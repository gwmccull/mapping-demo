import { cleanup } from '../../common/test-utils'
import trips, { 
    tripAdded, 
    tripsLoaded, 
    tripRemoved, 
} from './tripsSlice'
import { defaultTrip } from '../../common/demo-utils'

afterEach(cleanup)

describe('Trips Reducer', () => {
    it('should return the initial state', () => {
        let testInitialState = {
            allTrips: { 
                [defaultTrip.id] : {
                    ...defaultTrip
                }
            },
            loading: 'idle',
            storing: 'idle'
        }

        expect(trips(undefined, <any>{type: '@@INIT'})).toStrictEqual(testInitialState)
    })
    it('should reflect true when trips are loaded', () => {
        let testState = {}
        let testPayload = true
        let expectedMatch = { tripsAreLoaded: true }

        let actionCreator = tripsLoaded
        
        let testResult = trips(<any>testState, actionCreator(testPayload))

        expect(testResult).toMatchObject(expectedMatch)
    })
    it('should add a new basic trip by a unique tripId', () => {
        let testState = {}
        let testPayload = {
            tripId: "43bf61a5-d537-41f2-b010-fbc9a7df4772",
            ownerId: "Demo",
            publiclyVisible: false,
            orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM" ]
        }
        let expectedMatch: object = { allTrips: 
            { "43bf61a5-d537-41f2-b010-fbc9a7df4772" : 
                {
                    tripId: "43bf61a5-d537-41f2-b010-fbc9a7df4772",
                    ownerId: "Demo",
                    publiclyVisible: false,
                    orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM"]
               }
            }
        }
        let actionCreator = tripAdded

        let testResult = trips(<any>testState, actionCreator(testPayload))

        expect(testResult).toMatchObject(expectedMatch)
    })
    it('should remove a trip by tripId', () => {
        let testState = {
            allTrips : {
                "3e9af2e4-bb4c-41ca-b4a8-76b357471309" : {
                    tripId: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
                    ownerId: "Demo",
                    publiclyVisible: false,
                    orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM" ]
                },
                "43bf61a5-d537-41f2-b010-fbc9a7df4772" : {
                    tripId: "43bf61a5-d537-41f2-b010-fbc9a7df4772",
                    ownerId: "Demo",
                    publiclyVisible: false,
                    orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM"]                
                }
            },
            tripsAreLoaded: true
        }
        let testPayload = "3e9af2e4-bb4c-41ca-b4a8-76b357471309"
        let expectedMatch = { 
            allTrips: { 
                "43bf61a5-d537-41f2-b010-fbc9a7df4772" : {
                    tripId: "43bf61a5-d537-41f2-b010-fbc9a7df4772",
                    ownerId: "Demo",
                    publiclyVisible: false,
                    orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM"]                
                }
            },
            tripsAreLoaded: true            
        }
        let actionCreator = tripRemoved

        let testResult = trips(<any>testState, actionCreator(testPayload))

        expect(testResult).toStrictEqual(expectedMatch)
    })

    // it should update tripSelected details
})

describe('Trip Selectors', () => {

    let suiteTestState = {
        allTrips: { 
            "3e9af2e4-bb4c-41ca-b4a8-76b357471309" : {
                tripId: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
                ownerId: "Demo",
                publiclyVisible: false,
                orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM" ]
            },
            "43bf61a5-d537-41f2-b010-fbc9a7df4772" : {
                tripId: "43bf61a5-d537-41f2-b010-fbc9a7df4772",
                ownerId: "Demo",
                publiclyVisible: false,
                orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM"]                
            }
        },
        tripsAreLoaded: true
    }
    // it('should return a chosen trip', () => {
    //     let testState = suiteTestState
    //     let expectedMatch = suiteTestState
    //     jest.spyOn(selectors, 'allTripsSelector').mockReturnValue(testState.allTrips)

    //     // const selected = selectors.tripByIdSelector.resultFunc([testState.allTrips])
    //     // const selected = selectors.selectAllTrips.resultFunc(testState.allTrips)
    //     // console.log(selected)
 
    //     const actual = selectors.tripByIdSelector.resultFunc("3e9af2e4-bb4c-41ca-b4a8-76b357471309")
    //     const expected = {
    //         "3e9af2e4-bb4c-41ca-b4a8-76b357471309" : {
    //             tripId: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
    //             ownerId: "Demo",
    //             publiclyVisible: false,
    //             orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM" ]
    //         },
    //         "43bf61a5-d537-41f2-b010-fbc9a7df4772" : {
    //             tripId: "43bf61a5-d537-41f2-b010-fbc9a7df4772",
    //             ownerId: "Demo",
    //             publiclyVisible: false,
    //             orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM"]                
    //         }
    //     };
    //     expect(actual).toEqual(expected)
    })
    // it('should return a chosen trip from allTrips', () => {
    //     let testState = suiteTestState
    //     let testTripId = "3e9af2e4-bb4c-41ca-b4a8-76b357471309"
    //     jest.spyOn(selectors, 'allTripsSelector').mockReturnValue(testState.allTrips)
    //     let expectedMatch = {
    //         tripId: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
    //         ownerId: "Demo",
    //         publiclyVisible: false,
    //         orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM" ]
    //     }

    //     // let testResult = useSelector(selectTripById(testTripId))
    //     let testResult = tripByIdSelector.resultFunc(testTripId)

    //     console.log("Help: ",testResult)

    //     expect(testResult).toMatchObject(expectedMatch)
    // })
// })