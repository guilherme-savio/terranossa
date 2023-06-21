import background from "./assets/background-weeklycare.jpg"
import { WeekWeather } from "./WeekWeather/WeekWeather"
import { WateringLevel } from "./WateringLevel/WateringLevel"
import { Section } from "./Section"
import { LoadingAPI } from "./Loading";
import { useEffect, useState } from "react";



export function WeeklyCare() {
  const [lista, setLista] = useState([]);

  const latLong = "-28.70, -49.40";
  const key = "982e61bb516349598ab230746232006";
  
  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latLong}&days=7&lang=pt_br&`)
      .then((response) => response.json())
      .then((json) => setLista(json));
  }, []);

  if (!lista || lista.length === 0) {
    return <LoadingAPI />;
  }

  return (
    <div>
      <div
        className="fixed inset-0 -z-50 w-screen h-screen"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
          backgroundPosition: "100% 100%",
          backgroundSize: "100% 100%",
        }}
      />

      <div className="mb-[10%]">
        <Section />
        <div className="flex mt-[5%]">
          <div>
            <WeekWeather weatherapi={lista} />
          </div>
          <div>
            <WateringLevel weatherapi={lista["forecast"]["forecastday"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
