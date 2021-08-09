import React, { useEffect, useState } from "react";
import Card from "./Card";

const Weather = () => {
  const [cityName, setCityName] = useState("indore");
  const [weatherData, setWeatherData] = useState({});

  const getCityName = (event) => {
    setCityName(event.target.value);
  };

  const getData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=ee697f40914031fb913084d78fbb954f`;
      let res = await fetch(url);
      let apiData = await res.json();

      const { main: weatherMood } = apiData.weather[0];
      const { temp, humidity, pressure } = apiData.main;
      const { speed } = apiData.wind;
      const { country, sunset } = apiData.sys;
      const { name } = apiData;

      const weather = {
        weatherMood,
        temp,
        humidity,
        pressure,
        speed,
        country,
        sunset,
        name,
      };

      setWeatherData(weather);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container middleLayer">
        <input
          type="text"
          name="search"
          onChange={getCityName}
          value={cityName}
          placeholder="search here"
        />
        <button className="btn btn-secondary" onClick={() => getData()}>
          Search
        </button>

        <Card weatherData={weatherData} />
      </div>
    </>
  );
};
export default Weather;
