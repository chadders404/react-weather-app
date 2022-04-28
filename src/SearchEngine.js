import React, { useState } from "react";
import Results from "./Results.js";
import "./App.css";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [results, setResults] = useState("");

  function showResults(event) {
    event.preventDefault();
    setResults(<Results city={city} />);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={showResults}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div>{results}</div>
    </div>
  );
}
