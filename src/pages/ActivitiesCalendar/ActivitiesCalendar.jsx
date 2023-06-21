import React, { useState, useContext, useEffect } from 'react';
import DayDetails from './DayDetails';
import Calendar from './Calendar';
import ActivityContext from './contexts/ActivityContext';
import CurrentDayContext from './contexts/CurrentDayContext';
import DayActivityContext from './contexts/DayActivityContext';
import ActivityService from './services/ActivityService';

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
            className="absolute inset-0 -z-50 w-full h-screen"
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(src/pages/ActivitiesCalendar/assets/rural.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="grid grid-rows-3 grid-cols-6 justify-center">
            <Calendar />
            <DayDetails />
          </div>
        </CurrentDayContext.Provider>
      </DayActivityContext.Provider>
    </ActivityContext.Provider>
  );
}
