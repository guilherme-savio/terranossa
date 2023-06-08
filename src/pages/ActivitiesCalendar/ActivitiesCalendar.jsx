import React, { useState } from 'react';
import DayDetails from './DayDetails';
import Calendar from './Calendar';
import Note from './Note';
import Utils from '../../utils/Utils';

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
      startDate: new Date('2023-06-01 10:00'),
      endDate: new Date('2023-06-10 14:00'),
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

  const [currentDay, setCurrentDay] = useState(Utils.removeTime(new Date()));
  
  return (
    <div className="grid grid-rows-3 grid-cols-6 justify-center">
      <Calendar 
        activities={activities} 
        setCurrentDay={setCurrentDay}
      />
      <DayDetails 
        activities={activities.filter(
          (activity) => {
            const dateTime = currentDay.getTime();
            const startDate = Utils.removeTime(activity.startDate).getTime();
            const endDate = Utils.removeTime(activity.endDate).getTime();
  
            return (startDate === dateTime || endDate === dateTime || (startDate < dateTime && endDate > dateTime))
          }
        )} 
        currentDay={currentDay}
        />
      <Note/>
    </div>
  );
}
