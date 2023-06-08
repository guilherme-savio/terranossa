import React, { useState } from 'react';
import DateProgress from './DateProgress';

export default function DayDetails({ activities, currentDay }) {
  const [tab, setTab] = useState(0);
  const hasActivity = activities.length > 0;
  
  function renderActivities() {
    const activitiesList = [];

    activities.forEach(activity => {
      activitiesList.push(
        <li>
          <div className="bg-neutral-100 rounded-lg shadow-md p-4 m-2">
            <h3>{activity.name}</h3>
            <DateProgress startDate={activity.startDate} endDate={activity.endDate}/>
          </div>
        </li>)
    })

    return activitiesList;
  }

  function formatDate(date) {
    return date.toLocaleString(undefined, {
      weekday: 'long',
      day: '2-digit'
    })
  }

  return (
    <div className="calendar-header col-span-3 bg-neutral-100 rounded-lg shadow-md p-4 m-4">
      <div>
        <h2 className="text-xl font-bold text-center">{formatDate(currentDay)}</h2>
      </div>
      {hasActivity 
        ? <>
            <ul className="">
              {renderActivities()}
            </ul>
          </> 
        : <>
            <h3>Tem nada não</h3>
          </>
      }
  </div>
  );
}
