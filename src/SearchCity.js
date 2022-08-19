import React, { useState } from "react";
import axios from "axios";

export default function SearchCity() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState({});
  let [locationFound, setLocationFound] = useState(false);
  function showTemperature(response) {
    console.log(response);
    setLocationFound(true);
    setTemperature({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    setLocationFound(false);
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "222e28fa1f5c86fe36694ae8aad8d27e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemperature);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        id="search"
        onChange={updateCity}
      />
      <input type="submit" value="Submit" />
    </form>
  );

  if (locationFound) {
    return (
      <div>
        {form}
        <ul className="details">
          <li>{city}</li>
          <li>Temperature: {temperature.temperature} °F</li>
          <li>Description: {temperature.description}</li>
          <li>Humidity: {temperature.humidity}%</li>
          <li>Wind: {temperature.wind} m/h</li>
          <li>
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
