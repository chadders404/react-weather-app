import React, { useState } from "react";

import "./App.css";

export default function Results(props) {
  let city = props.city;
  return (
    <div>
      <p>Results for {city} here </p>
    </div>
  );
}
