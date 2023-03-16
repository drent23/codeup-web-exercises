(function(){
    "use strict";
    mapboxgl.accessToken = myMapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });
    let weatherMarker = new mapboxgl.Marker({draggable: true})
        .setLngLat([-74.5, 40])
        .addTo(map);
    console.log(weatherMarker);
     function onDragEnd() {
     let lngLat = weatherMarker.getLngLat();
     let arrWeather = [lngLat.lng, lngLat.lat];
      console.log(lngLat);
      weatherData(arrWeather)
         weatherForecast(arrWeather)
         fiveDayForecast(arrWeather)

     }
     weatherMarker.on(`dragend`, onDragEnd);
     function getLocation(searchString) {
         geocode(searchString, myMapToken).then(function (results) {
             weatherMarker.setLngLat(results);
             map.flyTo({center: results, zoom: 9});
             weatherData(results);
             // weatherForecast(results);
             fiveDayForecast(results);
                  })
             };
     function weatherData(results) {
         let html = "";
         $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`).done(function (data) {
             html += `<h6>Date: ${dateConversion(data.dt)}</h6>`;
             html += `<h6>City: ${data.name}</h6>`;
             html += `<h6>Weather: ${data.weather[0].description}</h6>`;
             html += `<h6>Wind speed: ${parseInt(data.wind.speed)} knots</h6>`;
             html += `<h6>Temp: ${parseInt(data.main.temp)} &deg;</h6>`;
             html += `<h6>Humidity: ${parseInt(data.main.humidity)}</h6>`;
             $("#currentCard").html(html);
         })
     };
    // function weatherForecast(results) {
    //     $.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${results[1]}&lon=${results[0]}&exclude=current,minutely,hourly&appid=${weatherKey}&units=imperial`).done(function (data) {
    //         let html = '';
            // // for(function () {

            // })
            $('#searchBtn').click(function (e) {
                e.preventDefault();
                getLocation($('#citySearch').val());
            });
            let dateConversion = function (timeStamp) {
                let date = new Date(timeStamp * 1000).toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                });
                return date;
            }
        // })
    //     var forecast = document.querySelector('#cardGroup');
    //     forecast.innerHTML = weatherForecast(fiveDays);
    // }
})();
// let gotPosition = function(pos) {
//     let lat = pos.coords.latitude;
//     let long = pos.coords.longitude;
//     getForecast(lat, long);
// }
// let getForecast = function(lat, long) {
//     let url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&exclude=current,minutely,hourly&appid=${weatherKey}&units=imperial";
//     getWeatherText(url);
// }
// async function getWeatherText(url) {
//     let weatherObject = await fetch(url);
//     let weatherText = await weatherObject.text();
//     console.log(weatherObject);
//     console.log(weatherText);
//     parseWeather(weatherText);
// }
// let parseWeather = function(weatherText) {
//     let weatherJSON = JSON.parse(weatherText);
//     console.log(weatherJSON);
//     let dailyForecast = weatherJSON.daily;
//     console.log(dailyForecast);
//     for(let x=0; x<dailyForecast.length; x++) {
//         let day = dailyForecast[x];
//         let today = new Date().getDay() + x;
//         if(today > 6) {
//             today = today - 7;
//         }
//         let dayOfWeek = getDayOfWeek(today);
//         let description = day.weather[0].description;
//         let icon = day.weather[0].icon;
//         let sunrise = timestampToTime(day.sunrise);
//         let sunset = timestampToTime(day.sunset);
//         let highTemp = kToF(day.temp.max);
//         let lowTemp = kToF(day.temp.min);
//         let humidity = day.humidity;
//         let windSpeed = day.wind_speed;
//         let windGust = day.wind_gust;
//         displayWeatherDay(dayOfWeek, description, icon, sunrise, sunset, highTemp, lowTemp, humidity, windSpeed, windGust);
//     }
// }
// let displayWeatherDay = function(dayOfWeek, description, icon, sunrise, sunset, highTemp, lowTemp, humidity, windSpeed, windGust) {
//     let fiveDayHTML = "<div class='dailyWeather'><img src='http://openweathermap.org/img/wn/" + icon + ".png'/>";
//     fiveDayHTML += "<h2>" + dayOfWeek + "</h2>";
//     fiveDayHTML += "<h3>" + description + "</h3>";
//     fiveDayHTML += "<h6>Sunrise: " + sunrise + "</h6>";
//     fiveDayHTML += "<h6>Sunset: " + sunset + "</h6>";
//     fiveDayHTML += "<h6>High: " + highTemp + "</h6>";
//     fiveDayHTML += "<h6>Low: " + lowTemp + "</h6>";
//     fiveDayHTML += "<h6>Humidity: " + humidity + "%</h6>";
//     fiveDayHTML += "<h6>Winds: " + parseInt(windSpeed) + " with gusts up to " + parseInt(windGust) + " knots</h6></div>";
//     document.getElementById("forecast").innerHTML +=fiveDayHTML;
//     }
// let getDayOfWeek = function(whichDay) {
//     let weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
//     return (weekday[whichDay]);
// }
// let kToF = function(kelvinToFahr) {
//     const celsius = kelvinToFahr - 273;
//     const fahrenheit = Math.floor(celsius * (9/5) + 32);
//     return fahrenheit
// }
// let timestampToTime = function(timeStamp) {
//     let date = new Date(timeStamp * 1000);
//     let hours = date.getHours();
//     let minutes = "";
//     if(date.getMinutes() < 10) {
//         minutes = "0" + date.getMinutes();
//     } else {
//         minutes = date.getMinutes();
//     }
//     return hours + ":" + minutes;
// }
// navigator.geolocation.getCurrentPosition(gotPosition);
function fiveDayForecast(results) {
    $.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${results[1]}&lon=${results[0]}&exclude=current,minutely,hourly&appid=${weatherKey}&units=imperial`).done(function(data){
        const fiveDays = [];
        let html = '';
        for (let i = 1; i < 5; i++) {
            const newDate = new Date(data.daily[i].dt * 1000);
            const newDay = {
                date: newDate.toDateString(),
                temp: data.daily[i].temp.day,
                humidity: data.daily[i].humidity,
                condition: data.daily[i].weather.description
            };
            html += `<h6>Date: ${newDate.toDateString()}</h6>`;
            html += `<h6>Weather: ${data.daily[i].weather.description}</h6>`;
            html += `<h6>Temp: ${data.daily[i].temp.day} &deg;</h6>`;
            html += `<h6>Humidity: ${data.daily[i].humidity}</h6>`;
        }
        $('#cardGroup').html(html)
        // fiveDays.push(newDay);
        console.log(fiveDays);
    })
}