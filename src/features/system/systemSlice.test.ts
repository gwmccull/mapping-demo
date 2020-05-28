import { cleanup } from '../../common/test-utils.js'
import system, { appIsLoaded, appIsThinking, mappingResourceSet, MappingService, mappingServiceChosen, mappingResourceRequested } from './systemSlice'

afterEach(cleanup)

describe('System Reducer', () => {
    it('should return the initial state', () => {
        let testInitialState = {
            userId: "Demo", // Needs to be implemented in actions.
            appThinking: false,
            appLoaded: false,
            mappingResources: {
                google: false,
                mapbox: false
            },
            chosenMappingService: "google",
            mappingResourceRequestInProgress: false
        }
        expect(system(undefined, <any>{type: '@@INIT'})).toStrictEqual(testInitialState)
    })
    it('should set appLoaded to true', () => {

        let testArg: boolean = true
        let testPayload = testArg
        let testState: undefined
        let expectedMatch: object = {
            appLoaded: testArg
        }
        let actionCreator = appIsLoaded

        let testResult = system(testState, actionCreator(testPayload) )

        expect(testResult).toMatchObject(expectedMatch)
    })
    it('should set appLoaded to false', () => {

        let testArg: boolean = false
        let testPayload = testArg
        let testState: undefined
        let expectedMatch: object = {
            appLoaded: testArg
        }
        let actionCreator = appIsLoaded

        let testResult = system(testState, actionCreator(testPayload) )

        expect(testResult).toMatchObject(expectedMatch)
    })
    it('should set appThinking to true', () => {

        let testArg: boolean = true
        let testPayload = testArg
        let testState: undefined
        let expectedMatch: object = {
            appThinking: testArg
        }
        let actionCreator = appIsThinking

        let testResult = system(testState, actionCreator(testPayload) )

        expect(testResult).toMatchObject(expectedMatch)
    })
    it('should set appThinking to false', () => {

        let testArg: boolean = false
        let testPayload = testArg
        let testState = undefined
        let expectedMatch: object = {
            appThinking: testArg
        }
        let actionCreator = appIsThinking

        let testResult = system(testState, actionCreator(testPayload) )

        expect(testResult).toMatchObject(expectedMatch)
    })

    it('should set mappingResources availability ["google": true"]', () => {

        let testState = {
            "google": false,
            "mapbox": false
        }
        let testPayload = {
            service: "google",
            availability: true
        }
        let expectedMatch: object = {
            "google": true,
            "mapbox": false
        }
        let actionCreator = mappingResourceSet

        let testResult = system(<any>testState, actionCreator(testPayload))

        expect(testResult).toStrictEqual(expectedMatch)
    })

    it('should set mappingResources availability ["mapbox": true"]', () => {

        let testState = {
            "google": false,
            "mapbox": false
        }
        let testPayload = {
            service: "mapbox",
            availability: true
        }
        let expectedMatch: object = {
            "google": false,
            "mapbox": true
        }
        let actionCreator = mappingResourceSet

        let testResult = system(<any>testState, actionCreator(testPayload))

        expect(testResult).toMatchObject(expectedMatch)
    })

    // it('should not set mappingResources availability for a non-established mapping resource', () => {

    //     let testState = {
    //         "google": false,
    //         "mapbox": false
    //     }
    //     type TestPayload = {
    //         service: MappingService,
    //         availability: boolean
    //     }
    //     let testPayload : TestPayload = {
    //         service: "googleMAPBOX",
    //         availability: true
    //     }
    //     console.log(typeof testPayload.service)
    //     let testMatch: object = {
    //         "google": false,
    //         "mapbox": false,
    //         "googleMAPBOX": true
    //     }
    //     let actionCreator = mappingResourceSet

    //     let testResult = system(<any>testState, actionCreator(testPayload))
    //     console.log(testResult)
    //     expect(testResult).not.toMatchObject(testMatch)
    // })

    it('should set chosenMappingService to "mapbox"', () => {

        type Service = "google" | "mapbox"
        let testService: Service = "mapbox"
        let testState = undefined
        let testPayload = testService
        let testMatch: object = {chosenMappingService: testService}
        let actionCreator = mappingServiceChosen

        let testResult = system(<any>testState, actionCreator(testPayload))

        expect(testResult).toMatchObject(testMatch)
    })
    it('should set chosenMappingService to "google"', () => {

        type Service = "google" | "mapbox"
        let testService: Service = "google"
        let testState = undefined
        let testPayload = testService
        let testMatch: object = {chosenMappingService: testService}
        let actionCreator = mappingServiceChosen

        let testResult = system(<any>testState, actionCreator(testPayload))

        expect(testResult).toMatchObject(testMatch)
    })
    it('should set mappingResourceRequestInProgress to true', () => {

        let testArg: boolean = true
        let testState = undefined
        let testPayload = testArg
        let testMatch: object = {mappingResourceRequestInProgress: testArg}
        let actionCreator = mappingResourceRequested

        let testResult = system(<any>testState, actionCreator(testPayload))

        expect(testResult).toMatchObject(testMatch)
    })
    it('should set mappingResourceRequestInProgress to false', () => {

        let testArg: boolean = false
        let testState = undefined
        let testPayload = testArg
        let testMatch: object = {mappingResourceRequestInProgress: testArg}
        let actionCreator = mappingResourceRequested

        let testResult = system(<any>testState, actionCreator(testPayload))

        expect(testResult).toMatchObject(testMatch)
    })
})