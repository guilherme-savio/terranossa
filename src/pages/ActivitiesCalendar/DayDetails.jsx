import React, { useContext, useEffect, useState } from 'react';
import ActivityCard from './ActivityCard';
import CurrentDayContext from './contexts/CurrentDayContext';
import DayActivityContext from './contexts/DayActivityContext';
import ActivityService from '../../services/ActivityService';

export default function DayDetails() {
  const { currentDay } = useContext(CurrentDayContext);
  const { dayActivities, setDayActivities } = useContext(DayActivityContext);

  const renderActivities = () => {
    return dayActivities.map(activity => <ActivityCard key={activity.id} activity={activity}/>);
  }

  const addActivity = () => {
    ActivityService.addActivity(currentDay);
    setDayActivities(ActivityService.getByDate(currentDay));
  }

  const formatDate = (date) => {
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
        : <div className='text-center'>
            <br/>
            <h3>Não existem atividades agendadas para esse dia.</h3>
          </div>
      }
      <button onClick={addActivity} className="btn btn-primary absolute right-3 bottom-3">
        Adicionar nova atividade
      </button>
  </div>
  );
}
