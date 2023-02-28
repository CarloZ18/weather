import styled from "styled-components";
import { WeatherSide } from "./Components/WeatherSide";
import { InfoSide } from "./Components/InfoSide";
import { useState } from "react";
import { useEffect } from "react";
import { apiWeather } from "./api/api";

function App() {
  const [country, setCountry] = useState("VE");
  const [nameCity, setNameCity] = useState("Caracas");
  const [currentTemp, setCurrentTemp] = useState(300);
  const [tempDescription, setTempDescription] = useState("Sunny");
  const [weatherIcon, setWeatherIcon] = useState("10b");

  const [precipitationValue, setPrecipitationValue] =useState()
  useEffect(() => {
    apiWeather("forecast", nameCity).then(function (response) {
      const data = response.data;
      console.log(data);
      setCountry(data.city.country);
      setNameCity(data.city.name);
      setCurrentTemp(data.list[0].main.temp);
      setTempDescription(data.list[0].weather[0].main);
      setWeatherIcon(data.list[0].weather[0].icon);
    });
  }, [nameCity]);
  return (
    <ContainerApp>
      <WeatherSide
        country={country}
        nameCity={nameCity}
        currentTemp={currentTemp}
        tempDescription={tempDescription}
        weatherIcon={weatherIcon}
      />
      <InfoSide />
    </ContainerApp>
  );
}
const ContainerApp = styled.div`
  border-radius: 25px;
  -webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  height: 400px;
`;
export default App;
