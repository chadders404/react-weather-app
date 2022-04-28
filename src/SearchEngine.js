import React, { useState } from "react";
export default function () {
  return (
    <div>
      <form>
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="Search" />
      </form>
      <p>Results here</p>
    </div>
  );
}
