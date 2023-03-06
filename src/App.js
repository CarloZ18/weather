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
  const [pressureValue, setPressureValue] = useState(4);
  const [humidityValue, setHumidityValue] = useState(4);
  const [windValue, setWindValue] = useState(4);

  const weekDaysRef = useRef([]);

  const { data } = useFetch(nameCity);

  console.log(data);

  const refsWeekDays = (el) => {
    if (el && !weekDaysRef.current.includes(el)) {
      weekDaysRef.current.push(el);
    }
  };

  const changeWeatherDay = (i, element) => {
    setNumDay(i);
    element.classList.add("active");
    i !== numDay && weekDaysRef.current[numDay].classList.remove("active");
  };
  
  const changeLocation = () => {};

  const currentDate = (numDay) => {
    const today = new Date();
    let dayInMiliseconds = 24 * 60 * 60 * 1000;
    const date = new Date(today.getTime() + dayInMiliseconds * numDay)
      .toDateString()
      .split(" ");
    return date[2] + " " + date[1] + " " + date[3];
  };

  return (
    <ContainerApp>
      {data !== null && (
        <WeatherSide numDay={numDay} data={data} currentDate={currentDate} />
      )}
      <InfoSide
        data={data}
        changeWeatherDay={changeWeatherDay}
        refsWeekDays={refsWeekDays}
        weekDaysRef={weekDaysRef}
        nameCity={nameCity}
        numDay={numDay}
      />
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
