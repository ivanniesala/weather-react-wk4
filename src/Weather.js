import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({});
  let [locationFound, setLocationFound] = useState(false);

  function showTemperature(response) {
    console.log(response.data);
    setLocationFound(true);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinantes: response.data.coord,
      type: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    setLocationFound(false);
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemperature);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        className="form-control"
        autoFocus="on"
        onChange={updateCity}
      />

      <input type="submit" value="Search" className="btn btn-primary w-100" />
    </form>
  );

  if (locationFound) {
    return (
      <div>
        {form}

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinantes} />
      </div>
    );
  } else {
    return form;
  }
}
