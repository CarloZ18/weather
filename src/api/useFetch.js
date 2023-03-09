import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(nameCity) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&cnt=4&APPID=${process.env.WEATHER_API_KEY}`;
    setLoading(true);
    axios({
      method: "get",
      url: API_URL,
    }).then(function (response) {
      setData(response.data);
    }).finally(()=>{
         setLoading(false);
    });
  }, [nameCity]);
  return { data, loading };
}
