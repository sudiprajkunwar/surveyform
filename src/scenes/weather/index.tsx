import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const WeatherBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  background: #113b65;
  color: white;
  padding: 5px 40px;
`;
const Weather = () => {
  let API_KEY = "6e332557bacfa8342e07a6a522a1db8b";
  const [data, setData] = useState();

  const nav = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    });
  };

  useEffect(() => {
    nav();
  }, []);

  return (
    <WeatherBlock>
      <div className="weather--name">Location: {data?.name}</div>
      <div className="weather--temp">Temperature: {data?.main.temp} C</div>
      <div className="weather--cloud">Weather: {data?.weather[0].main}</div>
    </WeatherBlock>
  );
};

export default Weather;
