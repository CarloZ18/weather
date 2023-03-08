import styled from "styled-components";
import { WeatherSide } from "./Components/WeatherSide";
import { InfoSide } from "./Components/InfoSide";
import { useState } from "react";
import { useRef } from "react";
import { useFetch } from "./api/useFetch";
import { useEffect } from "react";

function App() {
  const [nameCity, setNameCity] = useState("Caracas");
  const [numDay, setNumDay] = useState(0);
  
  const refWeekDays = useRef([]);

  const { data } = useFetch(nameCity);

  console.log(data);

  const refsWeekDays = (el) => {
    if (el && !refWeekDays.current.includes(el)) {
      refWeekDays.current.push(el);
    }
  };

  const changeWeatherDay = (i, element) => {
    setNumDay(i);
    element.classList.add("active");
    i !== numDay && refWeekDays.current[numDay].classList.remove("active");
  };

  const changeLocation = (nameCity) => {
    setNameCity(nameCity);
  };

  const currentDate = (numDay) => {
    const today = new Date();
    let dayInMiliseconds = 24 * 60 * 60 * 1000;
    const date = new Date(today.getTime() + dayInMiliseconds * numDay)
      .toDateString()
      .split(" ");
    return date[2] + " " + date[1] + " " + date[3];
  };

  const currentWeekDay = (day) => {
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return weekDays[new Date(currentDate(day)).getDay()];
  };

  return (
    <>
      {data !== null && (
        <ContainerApp>
          <WeatherSide
            numDay={numDay}
            data={data}
            currentDate={currentDate}
            currentWeekDay={currentWeekDay}
          />

          <InfoSide
            data={data}
            changeWeatherDay={changeWeatherDay}
            currentDate={currentDate}
            refsWeekDays={refsWeekDays}
            refWeekDays={refWeekDays}
            numDay={numDay}
            currentWeekDay={currentWeekDay}
            changeLocation={changeLocation}
          />
        </ContainerApp>
      )}
    </>
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
