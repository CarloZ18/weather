import {
  BsSun,
  BsCloudSun,
  BsCloudy,
  BsClouds,
  BsCloudRain,
  BsCloudRainHeavyFill,
  BsCloudLightning,
  BsSnow,
  BsCloudHaze,
  BsMoon,
  BsCloudMoon,
} from "react-icons/bs";

export const kelvinToCelsius = (temp) => {
  return Math.floor(temp - 273.15) + "°C";
};

export const convertIcon = (icon, className) => {
  /*Day icons*/
  if (icon === "01d") {
    return <BsSun className={className} />;
  } else if (icon === "02d") {
    return <BsCloudSun className={className} />;
  } else if (icon === "03d" || icon === "03n") {
    return <BsCloudy className={className} />;
  } else if (icon === "04d" || icon === "04n") {
    return <BsClouds className={className} />;
  } else if (icon === "09d" || icon === "09n") {
    return <BsCloudRainHeavyFill className={className} />;
  } else if (icon === "10d" || icon === "10n") {
    return <BsCloudRain className={className} />;
  } else if (icon === "11d" || icon === "11n") {
    return <BsCloudLightning className={className} />;
  } else if (icon === "13d" || icon === "13n") {
    return <BsSnow className={className} />;
  } else if (icon === "01n") {
    /* Night icons*/
    return <BsMoon className={className} />;
  } else if (icon === "02n") {
    return <BsCloudMoon className={className} />;
  } else {
    return <BsCloudHaze className={className} />;
  }
};
