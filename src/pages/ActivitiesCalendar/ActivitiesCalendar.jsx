import React, { useState } from 'react';
import Activity from './Activity';
import Calendar from './Calendar';

const Difficulty = {
  EASY: 'Fácil',
  MODERATE: 'Moderado',
  HARD: 'Difícil',
};

export function ActivitiesCalendar() {
  const activities = [
    {
      id: 1,
      name: 'Colheita',
      startDate: new Date('2023-05-30 10:00'),
      endDate: new Date('2023-06-01 14:00'),
      location: 'Treviso',
      difficulty: Difficulty.HARD,
      description: 'Colher cuzin.',
      participants: [
        { name: 'John Doe', age: 28 },
        { name: 'Jane Smith', age: 34 },
      ],
      organizer: { 
        name: 'Alice Brown', 
        email: 'alice@example.com' 
      },
    },
    {
      id: 2,
      name: 'Plantação',
      startDate: new Date('2023-05-10 10:00'),
      endDate: new Date('2023-05-10 14:00'),
      location: 'Treviso',
      difficulty: Difficulty.MODERATE,
      description: 'Plantar cuzin.',
      participants: [
        { name: 'John Doe', age: 28 },
        { name: null, age: null },
      ],
      organizer: { 
        name: 'Alice Brown', 
        email: 'alice@example.com' 
      },
    },
  ];

  const [currentActivity, setCurrentActivity] = useState(activities
    .find(activity => removeTime(activity.startDate).getTime() === removeTime(new Date()).getTime()));

  // TODO: COLOCAR NUM UTILS
  function removeTime(date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }
  
  return (
    <div 
      className={
        "bg-neutral-100 rounded-lg shadow-md p-4 grid grid-rows-3 grid-cols-6"}>
      <Activity currentActivity={currentActivity}/>
      <Calendar 
        activities={activities} 
        currentActivity={currentActivity} 
        setCurrentActivity={setCurrentActivity}/>
      <div className="mb-4 col-span-6">
        <h2 className="text-lg font-semibold">
          Legenda:
        </h2>
      </div>
    </div>
  );
}
