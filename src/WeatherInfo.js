import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";
import "./WeatherTemp.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="col-3">
      <ul className="details">
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      </div>

      <div className="row mt-2">
        <div className="col-8">
          <div className="d-flex">
            <div className="float">
              <WeatherIcon code={props.data.icon} size={90} />
            </div>

            <div className="mainTemp">
              <WeatherTemp farenheit={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
