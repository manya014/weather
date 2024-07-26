const apikey = "c6a8dfbc2d83be08a03751f730902476";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".input");
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    if(response.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json();
    }
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/hr";

    if(data.weather[0].main== "Clouds"){
        weathericon.src = "cloudy.png";
    }
    else if(data.weather[0].main== "Clear"){
        weathericon.src = "sunny.png";
    }
    else if(data.weather[0].main== "Rain"){
        weathericon.src = "vecteezy_3d-icon-cloudy-thunderstrom-heavy-rain-weather-forecast_24683626.png";
    }
    else if(data.weather[0].main== "Mist"){
        weathericon.src = "cold.png";
    }
    else if(data.weather[0].main== "Clear"){
        weathericon.src = "sunny.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})