
import CampingIcon from '@material-ui/icons/Terrain';
import FoodIcon from '@material-ui/icons/Restaurant';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import NightlifeIcon from '@material-ui/icons/MusicNote';
import GasIcon from '@material-ui/icons/LocalGasStation';
import LodgingIcon from '@material-ui/icons/Hotel';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';
import HospitalIcon from '@material-ui/icons/LocalHospital';
import GenericIcon from '@material-ui/icons/LocationOn';

export const mapMarkerIcons = {
    campingMapMarker: "campingMapMarker",
    foodMapMarker: "foodMapMarker",
    shoppingMapMarker: "shoppingMapMarker",
    nightLifeMapMarker: "nightLifeMapMarker",
    gasMapMarker: "gasMapMarker",
    lodgingMapMarker: "lodgingMapMarker",
    airplaneMapMarker: "airplaneMapMarker",
    hospitalMapMarker: "hospitalMapMarker",
    genericMapMarker: "genericMapMarker"
}

export const googleTypeActions = {
    filter_for_searches_when_adding: "filter_for_searches_when_adding",
    returned_by_places_service: "returned_by_places_service",
}

export const placeTypes = {
    accounting: {
        label: "Accounting",
        raw: "accounting",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    airport: {
        label: "Airport",
        raw: "airport",
        iconComponent: AirplaneIcon,
        mapMarkerImageName: mapMarkerIcons.airplaneMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "airplanemode_active"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    amusement_park: {
        label: "Amusement Park",
        raw: "amusement_park",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    aquarium: {
        label: "Aquarium",
        raw: "aquarium",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    art_gallery: {
        label: "Art Gallery",
        raw: "art_gallery",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    atm: {
        label: "ATM",
        raw: "atm",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    bakery: {
        label: "Bakery",
        raw: "bakery",
        iconComponent: FoodIcon,
        mapMarkerImageName: mapMarkerIcons.foodMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "restaurant"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    bank: {
        label: "Bank",
        raw: "bank",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    bar: {
        label: "Bar",
        raw: "bar",
        iconComponent: NightlifeIcon,
        mapMarkerImageName: mapMarkerIcons.nightLifeMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "music_note"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    beauty_salon: {
        label: "Beauty Salon",
        raw: "beauty_salon",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    bicycle_store: {
        label: "Bicycle Store",
        raw: "bicycle_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    book_store: {
        label: "Book Store",
        raw: "book_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    bowling_alley: {
        label: "Bowling Alley",
        raw: "bowling_alley",
        iconComponent: NightlifeIcon,
        mapMarkerImageName: mapMarkerIcons.nightLifeMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "music_note"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    bus_station: {
        label: "Bus Station",
        raw: "bus_station",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    cafe: {
        label: "Cafe",
        raw: "cafe",
        iconComponent: FoodIcon,
        mapMarkerImageName: mapMarkerIcons.foodMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "restaurant"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    campground: {
        label: "Campground",
        raw: "campground",
        iconComponent: CampingIcon,
        mapMarkerImageName: mapMarkerIcons.campingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "terrain"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    active_campground: {
        label: "Campground",
        raw: "active_campground",
        iconComponent: CampingIcon,
        mapMarkerImageName: mapMarkerIcons.campingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "terrain"
        },
        isGoogle: false
    },
    car_dealer: {
        label: "Car Dealer",
        raw: "car_dealer",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    car_rental: {
        label: "Car Rental",
        raw: "car_rental",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    car_repair: {
        label: "Car Repair",
        raw: "car_repair",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    car_wash: {
        label: "Car Wash",
        raw: "car_wash",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    casino: {
        label: "Casino",
        raw: "casino",
        iconComponent: NightlifeIcon,
        mapMarkerImageName: mapMarkerIcons.nightLifeMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "music_note"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    cemetery: {
        label: "Cemetry",
        raw: "cemetery",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    church: {
        label: "Church",
        raw: "church",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    city_hall: {
        label: "City Hall",
        raw: "city_hall",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    clothing_store: {
        label: "Cothing Store",
        raw: "clothing_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    convenience_store: {
        label: "Convenience Store",
        raw: "convenience_store",
        iconComponent: GasIcon,
        mapMarkerImageName: mapMarkerIcons.gasMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_gas_station"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    courthouse: {
        label: "Courthouse",
        raw: "courthouse",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    dentist: {
        label: "Dentist",
        raw: "dentist",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    department_store: {
        label: "Department Store",
        raw: "department_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    doctor: {
        label: "Doctor",
        raw: "doctor",
        iconComponent: HospitalIcon,
        mapMarkerImageName: mapMarkerIcons.hospitalMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_hospital"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    electrician: {
        label: "Electrician",
        raw: "electrician",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    electronics_store: {
        label: "Electronics Store",
        raw: "electronics_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    embassy: {
        label: "Embassy",
        raw: "embassy",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    fire_station: {
        label: "Fire Station",
        raw: "fire_station",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    florist: {
        label: "Florist",
        raw: "florist",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    funeral_home: {
        label: "Funeral Home",
        raw: "funeral_home",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    furniture_store: {
        label: "Furniture Store",
        raw: "furniture_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    gas_station: {
        label: "Gas Station",
        raw: "gas_station",
        iconComponent: GasIcon,
        mapMarkerImageName: mapMarkerIcons.gasMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_gas_station"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    gym: {
        label: "Gym",
        raw: "gym",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    hair_care: {
        label: "Hair Care",
        raw: "hair_care",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    hardware_store: {
        label: "Hardware Store",
        raw: "hardware_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    hindu_temple: {
        label: "Hindu Temple",
        raw: "hindu_temple",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    home_goods_store: {
        label: "Home Goods Store",
        raw: "home_goods_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    hospital: {
        label: "Hospital",
        raw: "hospital",
        iconComponent: HospitalIcon,
        mapMarkerImageName: mapMarkerIcons.hospitalMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_hospital"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    insurance_agency: {
        label: "Insurance Agency",
        raw: "insurance_agency",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    jewelry_store: {
        label: "Jewelry Store",
        raw: "jewelry_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    laundry: {
        label: "Laundry",
        raw: "laundry",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    lawyer: {
        label: "Lawyer",
        raw: "lawyer",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    library: {
        label: "Library",
        raw: "library",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    liquor_store: {
        label: "Liquor Store",
        raw: "liquor_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    local_government_office: {
        label: "Local Government Office",
        raw: "local_government_office",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    locksmith: {
        label: "Locksmith",
        raw: "locksmith",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    lodging: {
        label: "Lodging",
        raw: "lodging",
        iconComponent: LodgingIcon,
        mapMarkerImageName: mapMarkerIcons.lodgingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "hotel"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    meal_delivery: {
        label: "Meal Delivery",
        raw: "meal_delivery",
        iconComponent: FoodIcon,
        mapMarkerImageName: mapMarkerIcons.foodMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "restaurant"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    meal_takeaway: {
        label: "Meal Takeaway",
        raw: "meal_takeaway",
        iconComponent: FoodIcon,
        mapMarkerImageName: mapMarkerIcons.foodMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "restaurant"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    mosque: {
        label: "Mosque",
        raw: "mosque",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    movie_rental: {
        label: "Movie Rental",
        raw: "movie_rental",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    movie_theater: {
        label: "Movie Theater",
        raw: "movie_theater",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    moving_company: {
        label: "Moving Company",
        raw: "moving_company",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    museum: {
        label: "Museum",
        raw: "museum",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    night_club: {
        label: "Night Club",
        raw: "night_club",
        iconComponent: NightlifeIcon,
        mapMarkerImageName: mapMarkerIcons.nightLifeMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "music_note"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    painter: {
        label: "Painter",
        raw: "painter",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    park: {
        label: "Park",
        raw: "park",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    parking: {
        label: "Parking",
        raw: "parking",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    pet_store: {
        label: "Pet Store",
        raw: "pet_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    pharmacy: {
        label: "Pharmarcy",
        raw: "pharmacy",
        iconComponent: HospitalIcon,
        mapMarkerImageName: mapMarkerIcons.hospitalMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_hospital"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    physiotherapist: {
        label: "Physiotherapist",
        raw: "physiotherapist",
        iconComponent: HospitalIcon,
        mapMarkerImageName: mapMarkerIcons.hospitalMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_hospital"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    plumber: {
        label: "Plumber",
        raw: "plumber",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    police: {
        label: "Police",
        raw: "police",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    post_office: {
        label: "Post Office",
        raw: "post_office",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    real_estate_agency: {
        label: "Real Estate Agency",
        raw: "real_estate_agency",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    restaurant: {
        label: "Restaurant",
        raw: "restaurant",
        iconComponent: FoodIcon,
        mapMarkerImageName: mapMarkerIcons.foodMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "restaurant"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    roofing_contractor: {
        label: "Roofing Contractor",
        raw: "roofing_contractor",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    rv_park: {
        label: "RV Park",
        raw: "rv_park",
        iconComponent: CampingIcon,
        mapMarkerImageName: mapMarkerIcons.campingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "terrain"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    school: {
        label: "School",
        raw: "school",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    shoe_store: {
        label: "Shoe Store",
        raw: "shoe_store",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    shopping_mall: {
        label: "Shopping Mall",
        raw: "shopping_mall",
        iconComponent: ShoppingIcon,
        mapMarkerImageName: mapMarkerIcons.shoppingMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "shopping_cart"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    spa: {
        label: "Spa",
        raw: "spa",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    stadium: {
        label: "Stadium",
        raw: "stadium",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    storage: {
        label: "Storage",
        raw: "storage",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    subway_station: {
        label: "Subway Station",
        raw: "subway_station",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    synagogue: {
        label: "Synagogue",
        raw: "synagogue",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    taxi_stand: {
        label: "Taxi Stand",
        raw: "taxi_stand",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    train_station: {
        label: "Train Station",
        raw: "train_station",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    transit_station: {
        label: "Transit Station",
        raw: "transit_station",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    travel_agency: {
        label: "Travel Agency",
        raw: "travel_agency",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    university: {
        label: "University",
        raw: "university",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    veterinary_care: {
        label: "Veterinary Care",
        raw: "veterinary_care",
        iconComponent: HospitalIcon,
        mapMarkerImageName: mapMarkerIcons.hospitalMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_hospital"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    zoo: {
        label: "Zoo",
        raw: "zoo",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.filter_for_searches_when_adding,
            googleTypeActions.returned_by_places_service
        ]
    },
    administrative_area_level_1: {
        label: "Administrative Area Level 1",
        raw: "administrative_area_level_1",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    administrative_area_level_2: {
        label: "Administrative Area Level 2",
        raw: "administrative_area_level_2",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    administrative_area_level_3: {
        label: "Administrative Area Level 3",
        raw: "administrative_area_level_3",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    administrative_area_level_4: {
        label: "Administrative Area Level 4",
        raw: "administrative_area_level_4",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    administrative_area_level_5: {
        label: "Administrative Area Level 5",
        raw: "administrative_area_level_5",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    colloquial_area: {
        label: "Colloquial Area",
        raw: "colloquial_area",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    country: {
        label: "Country",
        raw: "country",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    establishment: {
        label: "Establishment",
        raw: "establishment",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    finance: {
        label: "Finance",
        raw: "finance",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    floor: {
        label: "Floor",
        raw: "floor",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    food: {
        label: "Food",
        raw: "food",
        iconComponent: FoodIcon,
        mapMarkerImageName: mapMarkerIcons.foodMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "restaurant"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    general_contractor: {
        label: "General Contractor",
        raw: "general_contractor",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    geocode: {
        label: "Geocode",
        raw: "geocode",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    health: {
        label: "Health",
        raw: "health",
        iconComponent: HospitalIcon,
        mapMarkerImageName: mapMarkerIcons.hospitalMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "local_hospital"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    intersection: {
        label: "Intersection",
        raw: "intersection",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    locality: {
        label: "Locality",
        raw: "locality",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    natural_feature: {
        label: "Natural Feature",
        raw: "natural_feature",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    neighborhood: {
        label: "Neighborhood",
        raw: "neighborhood",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    place_of_worship: {
        label: "Place of Worship",
        raw: "place_of_worship",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    political: {
        label: "Political",
        raw: "political",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    point_of_interest: {
        label: "Point of Interest",
        raw: "point_of_interest",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    post_box: {
        label: "Post Box",
        raw: "post_box",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    postal_code: {
        label: "Postal Code",
        raw: "postal_code",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    postal_code_prefix: {
        label: "Postal Code Prefix",
        raw: "postal_code_prefix",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    postal_code_suffix: {
        label: "Postal Code Suffix",
        raw: "postal_code_suffix",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    postal_town: {
        label: "Postal Town",
        raw: "postal_town",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    premise: {
        label: "Premise",
        raw: "premise",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    room: {
        label: "Room",
        raw: "room",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    route: {
        label: "Route",
        raw: "route",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    street_address: {
        label: "Street Address",
        raw: "street_address",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    street_number: {
        label: "Street Number",
        raw: "street_number",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    sublocality: {
        label: "Sublocality",
        raw: "sublocality",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    sublocality_level_4: {
        label: "Sublocality Level 4",
        raw: "sublocality_level_4",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    sublocality_level_3: {
        label: "Sublocality Level 3",
        raw: "sublocality_level_3",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    sublocality_level_2: {
        label: "Sublocality Level 2",
        raw: "sublocality_level_2",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    sublocality_level_1: {
        label: "Sublocality Level 1",
        raw: "sublocality_level_1",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    subpremise: {
        label: "Subpremise",
        raw: "subpremise",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: true,
        typePerms: [
            googleTypeActions.returned_by_places_service
        ]
    },
    wanders_generic: {
        label: "",
        raw: "wanders_generic",
        iconComponent: GenericIcon,
        mapMarkerImageName: mapMarkerIcons.genericMapMarker,
        hoverWindowIcon: {
            className: "material-icons",
            iconName: "location_on"
        },
        isGoogle: false
    }
}

/*  Summary:
    Given a string value for a 'type' of place, we find the
    proper 'placeType' constant and return it.
*/
export function getPlaceTypeConstantGivenAType(type) {
    var _retVal = placeTypes.wanders_generic
    Object.keys(placeTypes).forEach(function (key, index) {
        if (placeTypes[key].raw === type) {
            _retVal =placeTypes[key];
        }
    });
    return _retVal;
}