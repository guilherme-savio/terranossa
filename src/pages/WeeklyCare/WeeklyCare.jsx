import background from "./assets/background-weeklycare.jpg"
import { WeekWeather } from "./WeekWeather/WeekWeather"
import { WateringLevel } from "./WateringLevel/WateringLevel"
import { LoadingAPI } from "./Loading";
import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import Background from '../../components/Background';

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
      <Background img={background} />
      <div className="mb-[10%]">
        <PageTitle 
          subTitle="Mantenha a horta em controle"
          title="Manutenção"
          desc="Fique atualizado com a previsão do tempo e descubra a estimativa de rega nos próximos dias."
          img="src\pages\WeeklyCare\assets\tesoura-de-jardim.png"/>
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
