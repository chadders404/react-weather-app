import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Weds", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
        <span className="WeatherForecast-temp-max"> {maxTemperature()}</span>
      </div>
    </div>
  );
}
