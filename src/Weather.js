import React, { useState } from "react";
import "./App.css";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [results, setResults] = useState("");

  function showResults(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Container">
      <form onSubmit={showResults} className="searchForm">
        <input
          className="searchBar"
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="submitButton" />
      </form>

      <div className="dateTimeDiscription">
        <ul>
          <h1>{city}</h1>
          <li>Day/Time</li>
          <li>Discription</li>
        </ul>
      </div>

      <div className="icon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="mostly cloudy"
        />
      </div>

      <div className="mainTemp">
        6<span>°C</span>
      </div>

      <div className="weatherProperties">
        <ul>
          <li>Precipitation</li>
          <li>Humidity</li>
          <li>Wind</li>
        </ul>
      </div>
    </div>
  );
}
