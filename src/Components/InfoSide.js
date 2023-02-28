import styled from "styled-components";
import { FiCloud, FiCloudSnow, FiCloudRain } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { currentWeekDay } from "../utils";

export const InfoSide = () => {
 
  
  return (
    <InfoSideDiv>
      <TodayInfoContainer>
        <TodayInfo className="today-info">
          <div className="precipitation">
            <span className="title">PRECIPITATION</span>
            <span className="value">{precipitationValue}</span>
            <div className="clear"></div>
          </div>
          <div className="humidity">
            <span className="title">HUMIDITY</span>
            <span className="value">{humidityValue}</span>
            <div className="clear"></div>
          </div>
          <div className="wind">
            <span className="title">WIND</span>
            <span className="value">{windValue}</span>
            <div className="clear"></div>
          </div>
        </TodayInfo>
      </TodayInfoContainer>
      <div className="week-container">
      <WeekList className="week-list">
    <li className="active">
      <BsSun className="feather feather-sun day-icon"></BsSun>
      <span className="day-name">Tue</span>
      <span className="day-temp">29°C</span>
    </li>
    <li>
      <FiCloud className="feather feather-cloud day-icon"></FiCloud>
      <span className="day-name">Wed</span>
      <span className="day-temp">21°C</span>
    </li>
    <li>
      <FiCloudSnow className="feather feather-cloud-snow day-icon"></FiCloudSnow>
      <span className="day-name">Thu</span>
      <span className="day-temp">08°C</span>
    </li>
    <li>
      <FiCloudRain className="feather feather-cloud-rain day-icon"></FiCloudRain>
      <span className="day-name">Fry</span>
      <span className="day-temp">19°C</span>
    </li>
    <div className="clear"></div>
  </WeekList>
      </div>
      <LocationContainer>
        <button className="location-button">
          <SlLocationPin className="feather feather-map-pin"></SlLocationPin>
          <span>Change location</span>
        </button>
      </LocationContainer>
    </InfoSideDiv>
  );
};

const InfoSideDiv = styled.div`
  position: relative;
  float: left;
  height: 100%;
  padding-top: 25px;
  width: 350px;
`;

const TodayInfoContainer = styled.div`
  padding: 15px;
  margin: 0 25px 25px 25px;
  border-radius: 10px;
`;

const TodayInfo = styled.div`
  div:not(:last-child) {
    margin: 0 0 10px 0;
  }

  div .title {
    float: left;
    font-weight: 700;
  }

  div .value {
    float: right;
  }
`;

const WeekList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 35px;
  -webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  li {
    float: left;
    padding: 15px;
    cursor: pointer;
    transition: 200ms ease;
    border-radius: 10px;
  }

  li:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    background: #fff;
    color: #222831;
    -webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
  }

  li.active {
    background: #fff;
    color: #222831;
    border-radius: 10px;
  }

  li .day-name {
    display: block;
    margin: 10px 0 0 0;
    text-align: center;
  }

  li .day-icon {
    display: block;
    height: 30px;
    width: auto;
    margin: 0 auto;
  }

  li .day-temp {
    display: block;
    text-align: center;
    margin: 10px 0 0 0;
    font-weight: 700;
  }
`;

const LocationContainer = styled.div`
  padding: 25px 35px;

  button {
    outline: none;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    border-radius: 25px;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    background-image: var(--gradient);
    color: #ffffff;
    font-weight: 700;
    -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    -webkit-transition: -webkit-transform 200ms ease;
    transition: -webkit-transform 200ms ease;
    -o-transition: transform 200ms ease;
    transition: transform 200ms ease;
    transition: transform 200ms ease, -webkit-transform 200ms ease;
  }

  button:hover {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  button .feather {
    height: 1em;
    width: auto;
    margin-right: 5px;
  }
`;
