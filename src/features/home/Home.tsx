import React, { useState, useEffect, FunctionComponent} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Map from '../components/Map'
import InfoWindow from '../components/InfoWindow'
import Button from '../components/Button'
import { 
    assembleSelectedTripData, 
    selectedTripIsShown, 
    selectedTripIsLoaded } from '../ducks/selectedTrip'
import { RootState } from '../ducks/reducer'
import { WandersTripId } from '../typings/Wanders'
// import { fetchGoogleDetailsForPlaceId } from '../ducks/placesGoogle'
import { mappingServiceSetupRequested, appIsLoaded, mappingServiceSelector, mappingServiceResourceStatusSelector, mappingResourcesSelector, appIsLoadedSelector } from '../ducks/appStatus'

// import { getMyLocation } from '../assets/geolocation'

/* eslint-disable react-hooks/exhaustive-deps */

type HomeProps = {
    title: string
}
/**
 * @description The home or main container for the New Wanders Mapping Demo. 
 * This level is where top level data coordination occurs for the demo.
 */
const Home: FunctionComponent<HomeProps> = ({title}) => {

    // Default data to get the demo started
    let demoTripId : WandersTripId = "3e9af2e4-bb4c-41ca-b4a8-76b357471309"
    let defaultNoStops : number = 3

    // Set up current states
    // const myStore = useStore()
    let dispatch = useDispatch()
    let demoTrip = useSelector((state: RootState) => state.trips.allTrips[demoTripId])
    const mappingServiceName = useSelector(mappingServiceSelector)
    const isMappingServiceResourceRequested = useSelector(mappingServiceResourceStatusSelector)
    const mappingResources = useSelector(mappingResourcesSelector)
    const isSelectedMappingServiceAvailable = mappingResources[mappingServiceName]
    const isAppLoaded = useSelector(appIsLoadedSelector)

    const tripsAreLoaded = useSelector((state: RootState) => state.trips.tripsAreLoaded)
    const selectedTrip = useSelector((state: RootState) => state.selectedTrip!.tripDetails)
    const isTripSelected = selectedTrip !== null
    const isSelectedTripReady = useSelector((state: RootState) => state.selectedTrip.isReady)

    // For the demo, our selectedTrip is defaulted to the initialState of trips.allTrips,
    // but trips do need to be loaded first, and we need to designate this as the selectedTrip
    // with the default number of stops.
    if (tripsAreLoaded && !selectedTrip) {
        demoTrip = {
            ...demoTrip,
            noStopsDesired: defaultNoStops 
        }
        dispatch(selectedTripIsLoaded(demoTrip))
    }

    // Accepts an array of locations and links, and the map, and places
    // them on the map with a link to open additional information.
    // const addMarkers = links => map => {
    //     links.forEach((link, index) => {
    //       const marker = new window.google.maps.Marker({
    //         map,
    //         position: link.coords,
    //         label: `${index + 1}`,
    //         title: link.title,
    //       })
    //       marker.addListener(`click`, () => {
    //         window.location.href = link.url
    //       })
    //     })
    //   }

    const [mapProps, setMapProps] = useState({
        options: {
            center: {
                lat: 39.833333, 
                lng: -98.583333
            },
            zoom: 4,
            disableDefaultUI: false
        }
    })

    const getMyState = () => {
        // console.log(store.getState())
    }

    const setMappingService = (service: string) => {
        // dispatch(mappingServiceRequested(service))
    }

    /** @description A custom hook to handle changes with mapping services */
    function useMappingServices<T>() {
        useEffect(()=> {

        })

    }

    useEffect(() => {
        // console.log("Current mapping props: ",mapProps)
        // The selected mapping service must be loaded; App will not show as loaded by default so...
        if (!isSelectedMappingServiceAvailable && !isMappingServiceResourceRequested) {
            dispatch(mappingServiceSetupRequested(mappingServiceName))
        } else if (isSelectedMappingServiceAvailable && !isAppLoaded) {
            dispatch(appIsLoaded())
        }
        if (isSelectedMappingServiceAvailable && isAppLoaded) {
            switch (mappingServiceName) {
                case "google":
                    // let gMaps = window.google.maps
                    if (!isSelectedTripReady && selectedTrip) {
                    //    dispatch(assembleSelectedTripData(selectedTrip, gMaps))                 
                    } else dispatch(selectedTripIsShown())
                    break
                case "mapbox":
                    alert("Still implementing MapBox UI")
                    break
                default: debugger
            }

            // Make sure our trip stops have details loaded
            // const {orderedStops} = tripParameters
            // orderedStops.forEach((stopId) => {
            //     if (places[stopId] === undefined) {
            //         dispatch(fetchGoogleDetailsForPlaceId(stopId, gMaps))
            //     }
            // })
        } 
    },[isSelectedTripReady, mappingServiceName, isSelectedMappingServiceAvailable, selectedTrip, isAppLoaded])

    let list = []

    for (let service in mappingResources) {
        list.push({service: service})
    }

    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }
//     // const MemoMap = useCallback(<Map {...mapProps} {...onMount}/>, [])
//     // debugger

    return (
        <>
        <div>
            <h1 className="App">{title}</h1>
            <div className="menu-bar">
                <span>
                    { 
                        selectedTrip 
                        ? 
                        <InfoWindow {...selectedTrip} />
                        : <div> Preparing... </div>
                    }
                    <Button onClick={() => toggleDropdown()}
                        >Mapping Service</Button>
                        { showDropdown && 
                            list.map(item => 
                                <div key={item.service}>
                                    <Button onClick={() => setMappingService(item.service)}>{item.service} </Button>
                                </div>
                            )
                        } 
                    <Button onClick={() => getMyState()} 
                       >Log Current State</Button>
                </span>
              { isAppLoaded 
                ? 
                <Map {...mapProps}/>
                : <div> Loading... </div>
            }
            </div>
            <p>And that is a fact, Jack!</p>
        </div>
        </>
    )
}

export default Home;

    // getMyLocation().then( myPosit => {
    //     const {options} = mapProps
    //     let newLink = {
    //         coords: myPosit,
    //         title: "My Location",
    //     };
    //     links.push(newLink);
    //     setMapProps({
    //         options,
    //         onMount: addMarkers(links)
    //     })

    //   })