import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import { ThreeDots } from "react-loading-icons";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="ForecastSubgrid">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="WeatherForecast-day" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}{" "}
      </div>
    );
  } else {
    const apiKey = "74284988913c466762956594e85e02f8";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return (
      <div>
        <ThreeDots fill="#000" />
      </div>
    );
  }
}
