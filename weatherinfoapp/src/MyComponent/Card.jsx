import React from "react";

const Card = ({ weatherData }) => {
  const {
    weatherMood,
    temp,
    humidity,
    pressure,
    speed,
    country,
    sunset,
    name,
  } = weatherData;

  console.log(temp);

  const getCurrentDate = () => {
    let montharray = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    let date = new Date();
    let month = date.getMonth();
    let dates = date.getDate();
    let currentDate = dates + " | " + montharray[month + 1];
    return currentDate;
  };

  const getCurrentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hour > 12) {
      hour = hour - 12;
    }

    if (min <= 9) {
      min = "0" + min;
    }

    let currentTime = hour + ":" + min + ":" + sec + " ";
    return currentTime;
  };

  let sec = sunset;
  let date = new Date(sec * 1000);
  const timeSec = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-cloudy"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;C</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place text-uppercase">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">
          <p>{getCurrentDate()}</p>
          <h3>{getCurrentTime()}</h3>
        </div>
        <div className="last-div">
          <div className="row">
            <div className="col-3 col-sm-3 col-lg-3 col-lx-3 sunset">
              <p>
                <i className="fas fa-cloud-sun"></i>
              </p>
              <h5>
                {timeSec}
                <br /> sunset
              </h5>
            </div>
            <div className="col-3 col-sm-3 col-lg-3 col-lx-3 sunset">
              <p>
                <i className="fas fa-tint"></i>
              </p>
              <h5>
                {humidity}
                <br /> Humidity
              </h5>
            </div>
            <div className="col-3 col-sm-3 col-lg-3 col-lx-3 sunset ">
              <p>
                <i className="fas fa-cloud-showers-heavy"></i>
              </p>
              <h5>
                {pressure}
                <br /> Pressure
              </h5>
            </div>
            <div className="col-3 col-sm-3 col-lg-3 col-lx-3 sunset">
              <p>
                <i className="fas fa-wind"></i>
              </p>
              <h5>
                {speed}
                <br /> Wind
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
