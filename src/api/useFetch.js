import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(nameCity) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&cnt=4&APPID=fa3a81e49de01990ae6f68ff5b4ae20c`;
    axios({
      method: "get",
      url: API_URL,
    }).then(function (response) {
      setData(response.data);
    });
  }, [nameCity]);
  return { data };
}

/*setCountry(data.city.country);
      setNameCity(data.city.name);
      setCurrentTemp(data.list[numDay].main.temp);
      setTempDescription(data.list[numDay].weather[0].main);
      setWeatherIcon(data.list[numDay].weather[0].icon);
      setHumidityValue(data.list[numDay].main.humidity);
      setPressureValue(data.list[numDay].main.pressure);
      setWindValue(data.list[numDay].wind.speed);*/
