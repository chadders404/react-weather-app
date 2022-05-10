import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="mainTempNumber">{Math.round(props.celsius)}</span>
        <span className="tempUnit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="mainTempNumber">{Math.round(fahrenheit)}</span>
        <span className="tempUnit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
