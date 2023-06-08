import { WeekWeather } from "./WeekWeather/WeekWeather"
import { WateringLevel } from "./WateringLevel/WateringLevel"
import { LoadingAPI } from "./Loading";
import { useEffect, useState } from "react";


export function WeeklyCare() {
  const [lista, setLista] = useState([]);

  const latLong = "-28.70, -49.40";
  const key = "1a5c1e6e515b49a2810223320232805";
  
  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latLong}&days=7&lang=pt_br&`)
      .then((response) => response.json())
      .then((json) => setLista(json));
  }, []);

  if (!lista || lista.length === 0) {
    return <LoadingAPI />;
  }

  return (
    <div className="flex">
      <div>
        <WeekWeather weatherapi={lista}/>
      </div>
      <div>
        <WateringLevel weatherapi={lista["forecast"]["forecastday"]}/>
      </div>
    </div>
  );
}
