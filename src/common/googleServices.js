export const setupGoogleServices = () => {
    // create map inside the #map div
    console.log(window.google);
    let google = window.google;
    let map = new google.maps.Map(document.getElementById('map'), {
      // LatLng object used as center property value
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    // initialize classes
    let geocoder = new google.maps.Geocoder();
    let service = new google.maps.places.PlacesService(map);
    let infoWindow = new google.maps.InfoWindow();
    // initialize array to hold map markers
    let markers = [];
};