import React, { useState, useContext, useEffect } from 'react';
import DayDetails from './DayDetails';
import Calendar from './Calendar';
import ActivityContext from './contexts/ActivityContext';
import CurrentDayContext from './contexts/CurrentDayContext';
import DayActivityContext from './contexts/DayActivityContext';
import ActivityService from '../../services/ActivityService';
import PageTitle from '../../components/PageTitle';

export function ActivitiesCalendar() {
  const [activities, setActivities] = useState(useContext(ActivityContext).activities);
  const [dayActivities, setDayActivities] = useState(useContext(DayActivityContext).dayActivities);
  const [currentDay, setCurrentDay] = useState(useContext(CurrentDayContext).currentDay);

  useEffect(() => {
    setDayActivities(ActivityService.getByDate(activities, currentDay));
  }, [currentDay])

  useEffect(() => {
    setActivities(ActivityService.getToUpdate(activities, dayActivities));
  }, [dayActivities])

  return (
    <ActivityContext.Provider value={{activities, setActivities}}>
      <DayActivityContext.Provider value={{dayActivities, setDayActivities}}>
        <CurrentDayContext.Provider value={{currentDay, setCurrentDay}}>
          <div
            className="fixed inset-0 -z-50 w-full h-screen"
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(src/assets/img/rural.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <PageTitle 
            subTitle="Mantenha a horta em ordem"
            title="Calendário"
            desc="Fique atualizado com as atividades e descubra o que está agendado para os próximos dias."
            img="src\assets\img\agenda.png" />
          <div className="grid grid-rows-2 grid-cols-6 justify-center mt-5">
            <Calendar />
            <DayDetails />
          </div>
        </CurrentDayContext.Provider>
      </DayActivityContext.Provider>
    </ActivityContext.Provider>
  );
}
