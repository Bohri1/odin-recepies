let weather = {
    "apiKey": "e41c6b6d4cb5d05dfccd8b3f88c4b5fe",
    fetchWeather: function(city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" +
            this.apiKey
        )
        
        .then((response) => {
            if(!response.ok) {
                alert("Please try again");
                throw new Error ("Please try again");
            }
            return response.json();
        })
        .then ((data) => this.displayWeather(data)); //Displays the data for the location (if there is a data available)
    },
    //Displays the weather from API
    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        //The section below is used for displaying info on Page
        document.querySelector(".city").innerText = "Weather in " + name; //displays the name of the city
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"; //displays the weather icon
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        //Add image display of the searched city || image display of current weather ()

        
        
    },
    search: function() { //Searches for the value (using the API ofc)
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

//Create a function for the search bar
document.querySelector(".search button").addEventListener("click", function() {
    weather.search(); //This is the search function above
});
//Make search bar to function with Enter
document.querySelector(".search-bar").addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        weather.search(); //This is the search function on line 37
    }
})

weather.fetchWeather("London"); //London is the default weather location


//To add "Hourly forecast" in the future
