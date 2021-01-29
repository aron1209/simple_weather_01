import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";

const App = () => {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("東京都");
  const [weather, setWeather] = useState("");
  // const [weatherIcon, setWeatherIcon] = useState("");

  const getWeatherData = (city) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},japan&lang=ja&appid=fc37aef6e89c94d9365b1ec31d5c8ea4`,
    })
      .then((Response) => {
        console.log(Response.data);
        setTemperature(Response.data.main.temp - 273.15);
        setWeather(Response.data.weather[0].description);
        // setWeatherIcon(Response.data.weather[0].icon);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <Header />
      <div>
        {city}
        <br />
        {Math.round(temperature * 100) / 100}℃
        <br />
        {weather}
        {/* <br />\{weatherIcon} */}
      </div>
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={() => {
          getWeatherData(city);
        }}>
        GET
      </button>
    </div>
  );
};

export default App;
