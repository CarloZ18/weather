import styled from "styled-components";
import { SlLocationPin } from "react-icons/sl";
import { convertIcon, kelvinToCelsius } from "../utils";

export const WeatherSide = ({ numDay, data, currentDate, currentWeekDay }) => {
  return (
    <WeatherSideDiv>
      <WeatherGradient />
      <DataContainer>
        <DataDayname>{currentWeekDay(numDay)}</DataDayname>
        <DataDay>{currentDate(numDay)}</DataDay>
        <Location>
          <SlLocationPin />
          {data.city.name}, {data.city.country}
        </Location>
      </DataContainer>
      <WeatherContainer>
        {convertIcon(data.list[numDay].weather[0].icon, "weather-icon feather")}
        <WeatherTemp>
          {kelvinToCelsius(data.list[numDay].main.temp)}
        </WeatherTemp>
        <WeatherDesc>{data.list[numDay].weather[0].main}</WeatherDesc>
      </WeatherContainer>
    </WeatherSideDiv>
  );
};

const WeatherSideDiv = styled.div`
  position: relative;
  height: 100%;
  border-radius: 25px;
  background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  width: 300px;
  -webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-transform 300ms ease;
  transition: -webkit-transform 300ms ease;
  -o-transition: transform 300ms ease;
  transition: transform 300ms ease;
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  -webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
  transform: translateZ(0) scale(1.02) perspective(1000px);
  float: left;
  :hover {
    -webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
    transform: scale(1.1) perspective(1500px) rotateY(10deg);
  }
`;

const WeatherGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  border-radius: 25px;
  opacity: 0.8;
`;

const DataContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
`;

const DataDayname = styled.h1`
  margin: 0;
`;

const DataDay = styled.span`
  display: block;
`;

const Location = styled.span`
  display: inline-block;
  margin-top: 10px;
`;

const WeatherContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;

  .weather-icon.feather {
    height: 80px;
    width: auto;
  }
`;

const WeatherTemp = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 4em;
`;

const WeatherDesc = styled.span`
  margin: 0;
`;
