import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(nameCity) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&cnt=4&APPID=fa3a81e49de01990ae6f68ff5b4ae20c`;
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
