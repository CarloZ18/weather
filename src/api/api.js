import axios from "axios";

export const apiWeather = (path,country) => {
  const API_URL = `https://api.openweathermap.org/data/2.5/${path}?q=${country}&cnt=4&APPID=fa3a81e49de01990ae6f68ff5b4ae20c`;
  return axios({
    method: "get",
    url: API_URL,
  });
};
