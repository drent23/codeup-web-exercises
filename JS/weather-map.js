(function(){
    "use strict";
    mapboxgl.accessToken = myMapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });
    function weatherData(searchString) {
        let html = "";
        geocode(searchString, myMapToken).then(function (results) {
            map.setCenter(results);
            console.log(results[0]);
            console.log(results[1]);
            console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`);
            $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`).done(function (data) {
                console.log(data);
                html += `<h6>Date: ${data.dt}</h6>`;
                html += `<h6>City: ${data.name}</h6>`;
                html += `<h6>Weather: ${data.weather[0].description}</h6>`;
                html += `<h6>Wind speed: ${parseInt(data.wind.speed)} knots</h6>`;
                html += `<h6>Temp: ${parseInt(data.main.temp)} &deg;</h6>`;
                html += `<h6>Humidity: ${parseInt(data.main.humidity)}</h6>`;
                $(".card").html(html);
            })
        })
    };
    $('#searchBtn').click(function (e){
        e.preventDefault();
        weatherData($('#citySearch').val());
    })
})();
