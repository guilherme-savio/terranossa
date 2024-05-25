import background from "./assets/background-weeklycare.jpg"
import { WeekWeather } from "./WeekWeather/WeekWeather"
import { WateringLevel } from "./WateringLevel/WateringLevel"
import { LoadingAPI } from "./Loading";
import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import Background from '../../components/Background';

export function WeeklyCare() {

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
            <WeekWeather/>
          </div>
          <div>
            <WateringLevel/>
          </div>
        </div>
      </div>
    </div>
  );
}
