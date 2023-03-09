import styled from "styled-components";
import { WeatherSide } from "./Components/WeatherSide";
import { InfoSide } from "./Components/InfoSide";
import { useState } from "react";
import { useFetch } from "./api/useFetch";
import { useEffect } from "react";

function App() {
  const [nameCity, setNameCity] = useState("Caracas");
  const [numDay, setNumDay] = useState(0);

  const { data,loading } = useFetch(nameCity);


  const changeWeatherDay = (i) => {
    setNumDay(i);
  };

  const changeLocation = (nameCity) => {
    if(nameCity.length > 3){
      setNameCity(nameCity);
    }
    
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
useEffect(()=>{
  
})

  return (
    <>
      {loading === true? <>Loading data...</>: (
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
display:flex;
flex-direction:row;
  border-radius: 25px;
  -webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  height: 400px;
  @media (max-width: 768px) {
  flex-direction: column;
  height: 620px;
  }

`;
export default App;
