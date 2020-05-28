import { cleanup } from '../../common/test-utils'
import activeTrip, { newTripInitiated, existingTripActivated, activeTripAbandoned, orderedStopsChanged, ActiveTripState, stopsDesiredChanged, activeTripStatusChanged, fetchGoogleRoutesForActiveTrip } from './activeTripSlice'
import { defaultTrip } from '../../common/demo-utils'

afterEach(cleanup)

describe('Active Trip Slice', () => {

    describe('Reducer', () => {
        const testState = {
            id: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
            ownerId: "Demo",
            publiclyVisible: false,
            orderedStops: ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJgdL4flSKrYcRnTpP0XQSojM" ],
            loading: "idle",
            status: "draft",
            currentRequestId: undefined,
            error: null           
        }
        it('should return the inital state', () => {
            const testInitialState = {
                id: undefined,
                ownerId: undefined,
                publiclyVisible: false,
                orderedStops: null,
                loading: "idle",
                status: undefined,
                currentRequestId: undefined,
                error: null
            }
            expect(activeTrip(undefined, <any>{type: '@@INIT'})).toStrictEqual(testInitialState)
        })
        it('should initiate a draft of new trip', () => {
            const testState = undefined
            const actionCreator = newTripInitiated

            const actual = activeTrip(<any>testState, actionCreator)

            expect(actual.id).not.toBeUndefined()
            expect(actual).toMatchObject({
                ownerId: "Demo",
                publiclyVisible: false,
                orderedStops: null,
                loading: "idle",
                status: "draft",
                currentRequestId: undefined,
                error: null  
            })
        })
        it('should handle activation of a trip provided from allTrips', () => {
            const testTrip = defaultTrip
            const actionCreator = existingTripActivated
            const expected = {
                id: testTrip.id,
                ownerId: "Demo",
                publiclyVisible: false,
                orderedStops: defaultTrip.orderedStops,
            }

            const actual = activeTrip(<any>{},actionCreator(testTrip))

            expect(actual).toMatchObject(expected)
        })
        it('should handle abandonment of an active trip (activeTripAbandoned)', () => {

            const actionCreator = activeTripAbandoned
            const expected = {
                id: undefined,
                ownerId: undefined,
                publiclyVisible: false,
                orderedStops: null,
                loading: "idle",
                status: undefined,
                currentRequestId: undefined,
                error: null
            }
            const actual = activeTrip(<any>testState,actionCreator)
            expect(actual).toStrictEqual(expected)

        })
        it('should handle changes to the active trip status (activeTripStatusChanged)', () => {
            const testPayload = "draft"
            const actionCreator = activeTripStatusChanged(testPayload)
            const expected = {
                ...testState,
                status: testPayload
            }
            const actual = activeTrip(<any>testState, actionCreator)
            expect(actual).toStrictEqual(expected)
        })
        it('should handle changes to ordered stops (orderedStopChanged)', () => {
            const testPayload = ["ChIJK-0sC0Fl1oYRFccWTTgtw3M", "ChIJ7cv00DwsDogRAMDACa2m4K8", "ChIJgdL4flSKrYcRnTpP0XQSojM" ]
            const actionCreator = orderedStopsChanged(testPayload)
            const expected = {
                id: defaultTrip.id,
                ownerId: "Demo",
                publiclyVisible: false,
                orderedStops: testPayload,
                loading: "idle",
                status: "draft",
                currentRequestId: undefined,
                error: null
            }

            const actual = activeTrip(<ActiveTripState>testState, actionCreator)
            expect(actual).toStrictEqual(expected)
        })
        it('should handle changes to Stop Solver Configuration (stopsDesiredChanged)', () => {
            const testPayload = 3
            const actionCreator = stopsDesiredChanged(testPayload)
            const expected = {
                ...testState,
                noStopsDesired: testPayload
            }
            const actual = activeTrip(<any>testState, actionCreator)
            expect(actual).toStrictEqual(expected)
        })

        describe('extraReducers/Routing subfeature/fetchGoogleRoutesForActiveTrip', () => {
            it('should handle a pending request', () => {
                const testState = {
                    id: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",

                    loading: "idle",
                    status: "draft"
                }
                const testAction = fetchGoogleRoutesForActiveTrip.pending('myId','')
                const actual = activeTrip(<any>testState, testAction)

                expect(actual).toStrictEqual({
                    ...testState,
                    currentRequestId: "myId",
                    loading: "pending"
                })
            })
            it('should handle a fulfilled promise resposne', () => {
                const testState = {
                    id: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",

                    loading: "pending",
                    status: "draft",
                    currentRequestId: "myId",
                    error: null           
                }
            })
        })
    })
    describe('Selectors', () => {

    })
})


// it('should handle trying to select a non-existent trip', () => {
//     let testState = undefined
//     let testPayload = "3e9af2e4-bb4c-41ca-b4a8-76b35747xxxx"
//     let expectedMatch = {
//         selectedTrip: {
//             id: null,
//             details: null,
//             isRevised: false,
//             isReadyForDisplay: false

//         }
//     }
//     let actionCreator = tripSelected

//     let testResult = trips(<any>testState, actionCreator(testPayload))

//     expect(testResult).toMatchObject(expectedMatch)
// })

// it('should handle setting selectedTrip.isRevised to true/false', () => {
//     let testArg = false
//     let testState = {
//         selectedTrip: {
//             id: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
//             details: defaultTrip,
//             isRevised: false,
//             isReadyForDisplay: false

//         }
//     }
//     let testPayload = testArg
//     let expectedMatch = {
//         selectedTrip: {
//             id: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
//             details: defaultTrip,
//             isRevised: testArg,
//             isReadyForDisplay: false

//         }
//     }
//     let actionCreator = tripSelectedIsRevised

//     let testResult = trips(<any>testState, actionCreator(testPayload))

//     expect(testResult).toMatchObject(expectedMatch)
// })

// it('should handle setting selectedTrip.isReadyForDisplay to true/false', () => {
//     let testArg = true // test either true or false
//     let testState = {
//         selectedTrip: {
//             id: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
//             details: defaultTrip,
//             isRevised: false,
//             isReadyForDisplay: false

//         }
//     }
//     let testPayload = testArg
//     let expectedMatch = {
//         selectedTrip: {
//             id: "3e9af2e4-bb4c-41ca-b4a8-76b357471309",
//             details: defaultTrip,
//             isRevised: false,
//             isReadyForDisplay: testArg

//         }
//     }
//     let actionCreator = tripSelectedIsReadyForDisplay

//     let testResult = trips(<any>testState, actionCreator(testPayload))

//     expect(testResult).toMatchObject(expectedMatch)
// })
