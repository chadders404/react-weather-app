import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="ForecastSubgrid">
      <div>
        Thu
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" size={36} />
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-min">19°</span>
          <span className="WeatherForecast-temp-max"> 10°</span>
        </div>
      </div>
      <div>
        Thu
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" size={36} />
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-min">19°</span>
          <span className="WeatherForecast-temp-max"> 10°</span>
        </div>
      </div>
      <div>
        Thu
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" size={36} />
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-min">19°</span>
          <span className="WeatherForecast-temp-max"> 10°</span>
        </div>
      </div>
      <div>
        Thu
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" size={36} />
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-min">19°</span>
          <span className="WeatherForecast-temp-max"> 10°</span>
        </div>
      </div>
      <div>
        Thu
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" size={36} />
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-min">19°</span>
          <span className="WeatherForecast-temp-max"> 10°</span>
        </div>
      </div>
      <div>
        Thu
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" size={36} />
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-min">19°</span>
          <span className="WeatherForecast-temp-max"> 10°</span>
        </div>
      </div>
      <div>
        Thu
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" size={36} />
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-min">19°</span>
          <span className="WeatherForecast-temp-max"> 10°</span>
        </div>
      </div>
    </div>
  );
}
