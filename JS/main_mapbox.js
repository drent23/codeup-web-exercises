(function() {
    "use strict";
    var myToken = "pk.eyJ1IjoiZHJlbnQyMyIsImEiOiJjbGYyeGZyZ3AwaWFzNDRsaWM5dnBnZnFsIn0.LtdHr9STm9h4roAZNfCMrg";
    mapboxgl.accessToken = myToken;
    var dallasMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 13,
        center: [-96.78653, 32.78111] // [lng, lat]
    });
    var favEats = [
        {
            name: "SER Steak",
            location: "2201 N Stemmons Fwy; Dallas, TX 75207",
            type: "steakhouse",
            features: ["excellent wine menu", "great cocktails", "special events"]
        },
        {
            name: "Pappadeauxs",
            location: "3520 Oak Lawn Ave; Dallas, TX 75219",
            type: "cajun/seafood",
            features: ["large portions", "great cocktails", "military discount"]
        },
        {
            name: "The Henry",
            location: "2301 N Akard St; Dallas, TX 75201",
            type: "American fine cuisine",
            features: ["pretzel bites appetizer", "excellent wine menu", "downtown location"]
        }
    ]
    // favEats.forEach(restaurant => {
    //     var arrMarker = new mapboxgl.Marker()
    //
    // }))
    var serSteak = new mapboxgl.Marker()
    serSteak.setLngLat([-96.82917, 32.79995]);
    serSteak.addTo(dallasMap);
    var serPopup = new mapboxgl.Popup()
    serPopup.setLngLat([-96.82917, 32.79995]);
    serPopup.setHTML("<span>SER Steak</span>");
    serSteak.setPopup(serPopup)

    geocode("Ser Steak Dallas, TX", myToken).then(function(results) {
        console.log("Geocoding at its finest");
        console.log(results);
    })
    reverseGeocode({lat: 32.79995, lng: -96.82917}, myToken).then(function(results) {
        console.log("Reverse now yall");
        console.log(results);
    })
    geocode("1 Lincoln Rd, Miami Beach, FL 33139", myToken).then(function(results) {
        console.log(results);
        var vacaySpot = new mapboxgl.Marker();
        vacaySpot.setLngLat(results);
        vacaySpot.addTo(dallasMap);
        var optionsObj = {center: results, zoom: 15};
        dallasMap.flyTo(optionsObj);
        console.log(optionsObj);
    })
})();