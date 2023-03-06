import styled from "styled-components";
import { SlLocationPin } from "react-icons/sl";
import { convertIcon, currentWeekDay, kelvinToCelsius } from "../utils";

export const InfoSide = ({
  data,
  changeWeatherDay,
  refsWeekDays,
  weekDaysRef,
  nameCity,
  numDay
}) => {

  return (
    <InfoSideDiv>
      <TodayInfoContainer>
        <TodayInfo className="today-info">
          <div className="pressure">
            <span className="title">PRESSURE</span>
            <span className="value">{data?.list[numDay].main.pressure} hPa</span>
            <div className="clear"></div>
          </div>
          <div className="humidity">
            <span className="title">HUMIDITY</span>
            <span className="value">{data?.list[numDay].main.humidity}%</span>
            <div className="clear"></div>
          </div>
          <div className="wind">
            <span className="title">WIND</span>
            <span className="value">{data?.list[numDay].wind.speed}km/h</span>
            <div className="clear"></div>
          </div>
        </TodayInfo>
      </TodayInfoContainer>
      <div className="week-container">
        <WeekList className="week-list">
          {data?.list.map((e, index) => (
            <li
              key={e.dt}
              onClick={() =>
                changeWeatherDay(index, weekDaysRef.current[index])
              }
              ref={refsWeekDays}
            >
              {convertIcon(
                data.list[index].weather[0].icon,
                "feather feather-sun day-icon"
              )}
              <span className="day-name">
                {currentWeekDay(e.dt_txt).slice(0, 3)}
              </span>
              <span className="day-temp">
                {kelvinToCelsius(data.list[index].main.temp)}
              </span>
            </li>
          ))}
          <div className="clear"></div>
        </WeekList>
      </div>
      <LocationContainer>
        <button className="location-button">
          <div>
            <SlLocationPin className="feather feather-map-pin"></SlLocationPin>
            <span>Change location</span>
          </div>

          <input placeholder="Enter your city"></input>
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

  button:hover div {
    opacity: 0;
    transform: translateX(50px);
    transition: ease-in 500ms;
  }

  button input {
    position: absolute;
    top: 324px;
    left: 50px;
    opacity: 0;
    border: none;
    padding: 3px;
    text-align: center;
  }

  button:hover input {
    opacity: 1;
    left: 90px;
    transition: ease-in 500ms;
  }

  button .feather {
    height: 1em;
    width: auto;
    margin-right: 5px;
  }
`;
