import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="dateTimeDescription">
        <ul>
          <h1>{props.data.city}</h1>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="icon">
        <WeatherIcon
          code={props.data.icon}
          alt={props.data.description}
          size={60}
        />
      </div>
      <div className="mainTemp">
        <WeatherTemperature celsius={props.data.mainTemp} />
      </div>
      <div className="weatherProperties">
        <ul>
          {/* <li>Precipitation: {props.data.precipitation}% </li> */}
          <li>Humidity: {Math.round(props.data.humidity)}% </li>
          <li>Wind: {Math.round(props.data.wind)} km/hr</li>
        </ul>
      </div>
    </div>
  );
}
