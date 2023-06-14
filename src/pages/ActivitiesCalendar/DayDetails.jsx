import React, { useContext } from 'react';
import ActivityCard from './ActivityCard';
import Activity from './models/Activity';
import CurrentDayContext from './contexts/CurrentDayContext';
import DayActivityContext from './contexts/DayActivityContext';

export default function DayDetails() {
  const { dayActivities, setDayActivities } = useContext(DayActivityContext);
  const { currentDay } = useContext(CurrentDayContext);
  
  function renderActivities() {
    return dayActivities.map(activity => <ActivityCard key={activity.id} activity={activity}/>);
  }

  function addActivity() {
    setDayActivities([...dayActivities, new Activity('', currentDay, currentDay, true)]);
  }

  function formatDate(date) {
    return date.toLocaleString(undefined, {
      weekday: 'long',
      day: '2-digit'
    })
  }

  return (
    <div className="calendar-header col-span-3 bg-neutral-100 rounded-lg shadow-md p-4 m-2 relative">
      <div>
        <h2 className="text-xl font-bold text-center">{formatDate(currentDay)}</h2>
      </div>
      {dayActivities.length > 0 
        ? <ul>{renderActivities()}</ul>
        : <h3>Tem nada não</h3>
      }
      <button onClick={addActivity} className="btn btn-primary absolute right-3 bottom-3">
        Adicionar nova atividade
      </button>
  </div>
  );
}
