// (function() {
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
            name: "SER Steak" ,
            address: "2201 N Stemmons Fwy, Dallas, TX 75207",
            popupHTML: "<span>Best steaks in Dallas!</span><img style='width: 20px; height: 20px' src='img/ser_steak.jpeg'>",
            type: "steakhouse",
            features: ["excellent wine menu", "great cocktails", "special events"]
        },
        {
            name: "Pappadeauxs",
            address: "3520 Oak Lawn Ave, Dallas, TX 75219",
            popupHTML: "<span>Good food, good times</span><img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Ffiles.pappadeaux.com%2Fimages%2Fdyn%2Fmenus%2Fmenu_pic_321.jpg&imgrefurl=https%3A%2F%2Fpappadeaux.com%2Fmenu%2F&tbnid=6YXiVxR7e-xlRM&vet=12ahUKEwjfjbqbpNn9AhXGlYQIHY0UDBMQMygNegUIARD8AQ..i&docid=VKOjJPbtlFqUMM&w=636&h=391&q=pappadeaux&client=safari&ved=2ahUKEwjfjbqbpNn9AhXGlYQIHY0UDBMQMygNegUIARD8AQ'>",
            type: "cajun/seafood",
            features: ["large portions", "great cocktails", "military discount"]
        },
        {
            name: "The Henry",
            address: "2301 N Akard St, Dallas, TX 75201",
            type: "American fine cuisine",
            popupHTML: "<span>Best rooftop bar in Dallas!</span><img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Ffrc-thehenry.s3-us-west-1.amazonaws.com%2Fwp-content%2Fuploads%2F2018%2F01%2F29130019%2FDallas_V2_1920x800.jpg&imgrefurl=https%3A%2F%2Fwww.thehenryrestaurant.com%2Flocations%2Fthe-henry-dallas%2F&tbnid=ux8u4-30P0FGSM&vet=12ahUKEwiqzsX4pNn9AhVTcDABHfRhDSwQMygBegUIARDgAQ..i&docid=SJA2f-lhni4IoM&w=1920&h=800&q=the%20henry&client=safari&ved=2ahUKEwiqzsX4pNn9AhVTcDABHfRhDSwQMygBegUIARDgAQ'>",
            features: ["pretzel bites appetizer", "rooftop bar", "downtown location"]
        }
    ]
    function renderMap(myToken, dallasMap) {
        favEats.forEach(function (info) {
            geocode(info.address, myToken).then(function (coordinates) {
                var arrPopup = new mapboxgl.Popup().setHTML(info.popupHTML);
                var arrMarker = new mapboxgl.Marker()
                    .setLngLat(coordinates)
                    .addTo(dallasMap)
                    .setPopup(arrPopup);
                arrPopup.addTo(dallasMap);
            });
        })
    }



    renderMap(myToken, dallasMap)

//We need a second function probably to accept a search string into geocode placeMarkerAndPopups(stringFromInput) { //geocode(stringfromInput, myToken)}
function placeMarkerAndPopups(userInputStr) {
        geocode(userInputStr, myToken, dallasMap)
    var arrPopup = new mapboxgl.Popup().setHTML(info.popupHTML);
    var arrMarker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(dallasMap)
        .setPopup(arrPopup);
    arrPopup.addTo(dallasMap);
    };

$("#searchBtn").click(function(e){
    e.preventDefault();
    placeMarkerAndPopups($("#userSearch").val());

})
    // var serSteak = new mapboxgl.Marker()
    // serSteak.setLngLat([-96.82917, 32.79995]);
    // serSteak.addTo(dallasMap);
    // var serPopup = new mapboxgl.Popup()
    // serPopup.setLngLat([-96.82917, 32.79995]);
    // serPopup.setHTML("<span>SER Steak</span>");
    // serSteak.setPopup(serPopup)
    //
    // geocode("Ser Steak Dallas, TX", myToken).then(function(result) {
    //     console.log("Geocoding at its finest");
    //     console.log(result);
    // })
    // reverseGeocode({lat: 32.79995, lng: -96.82917}, myToken).then(function(results) {
    //     console.log("Reverse now yall");
    //     console.log(result);
    // })
    // geocode("1 Lincoln Rd, Miami Beach, FL 33139", myToken).then(function(results) {
    //     console.log(results);
    //     var vacaySpot = new mapboxgl.Marker();
    //     vacaySpot.setLngLat(results);
    //     vacaySpot.addTo(dallasMap);
    //     var optionsObj = {center: results, zoom: 15};
    //     dallasMap.flyTo(optionsObj);
    //     console.log(optionsObj);
// })();