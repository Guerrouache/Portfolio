// ---------------------------------------------------------------------------------------------------------------------------->
// MAP ELEMENT  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->


// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        scrollwheel: false, //set to true to enable mouse scrolling while inside the map area

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(45.838900, 4.721390), // Surat

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "32"
                    },
                    {
                        "lightness": "-3"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": "1.18"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-70"
                    },
                    {
                        "lightness": "14"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "-14"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "12"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.838900, 4.721390),
        map: map,
        url: 'https://www.google.fr/maps/dir//1004+Route+du+Pont+de+Reyre,+69380+Dommartin/@45.8386795,4.7197548,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47f49285b7e5435d:0x226c7223e34b8c7d!2m2!1d4.7219435!2d45.8386795!3e0'
    });

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
    });
};
