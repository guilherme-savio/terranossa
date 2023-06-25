import React, { useState, useContext, useEffect } from 'react';
import DayDetails from './DayDetails';
import Calendar from './Calendar';
import PageTitle from '../../components/PageTitle';
import Background from '../../components/Background';
import CurrentDayContext from './contexts/CurrentDayContext';
import DayActivityContext from './contexts/DayActivityContext';
import ActivityService from '../../services/ActivityService';

export function ActivitiesCalendar() {
  const [currentDay, setCurrentDay] = useState(useContext(CurrentDayContext).currentDay);
  const [dayActivities, setDayActivities] = useState(useContext(DayActivityContext).dayActivities);

  useEffect(() => {
    setDayActivities(ActivityService.getByDate(currentDay));
  }, [currentDay]);
  
  return (
    <CurrentDayContext.Provider value={{currentDay, setCurrentDay}}>
      <DayActivityContext.Provider value={{dayActivities, setDayActivities}}>
        <Background img='src/assets/img/rural.jpg' />
        <PageTitle 
          subTitle="Mantenha a horta em ordem"
          title="Calendário"
          desc="Fique atualizado com as atividades e descubra o que está agendado para os próximos dias."
          img="src\assets\img\agenda.png" />
        <div className="grid grid-rows-2 grid-cols-6 justify-center mt-5">
          <Calendar />
          <DayDetails />
        </div>
      </DayActivityContext.Provider>
    </CurrentDayContext.Provider>
  );
}
