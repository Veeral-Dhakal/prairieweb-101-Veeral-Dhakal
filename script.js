document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("Full-Name").value.trim();
        const email = document.getElementById("Email").value.trim();
        

        alert(`Thank you, ${fullName}! We will send info about the trail to your mail at ${email}.`);

        form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    fetchHaLingWeather();
});
    function fetchHaLingWeather() {

    
    const weatherCard = document.getElementById("weather-card");
    const apiurl = "https://api.open-meteo.com/v1/forecast?latitude=51.0617&longitude=-115.4174&current_weather=true";
    fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            const temperature= data.current_weather.temperature;
            const windspeed = data.current_weather.windspeed;
             weatherCard.innerHTML = `
                <h3>Current Weather at Ha Ling Peak</h3>
                <p>🌡️Temperature: ${temperature}°C</p>
                <p>💨Wind Speed: ${windspeed} km/h</p>
            `;
           
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);

            weatherCard.innerHTML = `
             <p> Unable to load weather data at this time.</p>
            <p>Please check local Kananaskis forecast before heading out on the trail.</p> ` ;
        });


    }