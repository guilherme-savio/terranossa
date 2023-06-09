import React, { useState } from 'react';
import Activity from './Activity';

export default function DayDetails({ activities, setActivities, dayActivities, setDayActivities, currentDay }) {
  const hasActivity = dayActivities.length > 0;
  
  function renderActivities() {
    return dayActivities.map(activity => {
      return (
        <Activity 
          key={activity.id}
          activity={activity}
          activities={activities}
          setActivities={setActivities}
          dayActivities={dayActivities}
          setDayActivities={setDayActivities}
        />
      );
    });
  }

  function addActivity() {
    const newActivity = {
      id: 3, 
      name: '', 
      enableEdit: true, 
      startDate: currentDay,
      endDate: currentDay, 
    };

    setDayActivities([...dayActivities, newActivity]);
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
      {hasActivity 
        ? <>
            <ul>
              {renderActivities()}
            </ul>
          </>
        : <>
            <h3>Tem nada não</h3>
          </>
      }
      <button onClick={addActivity} className="btn btn-primary absolute right-3 bottom-3">
        Adicionar nova atividade
      </button>
  </div>
  );
}
