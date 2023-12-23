import React from "react";
import weather from "./Constants.js"


export default function Weather() {

  return (
    <React.Fragment>
      <div className="temperature">
        <div>
          <img src="" alt={weather.pic} />
          {weather.now}
        </div>
        <div className="weather-future">
          <span>Утром {weather.morning}</span>
          <span>Днём {weather.afternoon}</span>
        </div>
      </div>
    </React.Fragment>
  );
}