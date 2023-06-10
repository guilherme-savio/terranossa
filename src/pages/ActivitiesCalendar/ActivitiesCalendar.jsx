import React, { useState } from 'react';
import DayDetails from './DayDetails';
import Calendar from './Calendar';
import ActivityService from './services/ActivityService';
import Utils from '../../utils/Utils';
import Activity from './models/Activity';
import Person from './models/Person';

const Difficulty = {
  EASY: 'Fácil',
  MODERATE: 'Moderado',
  HARD: 'Difícil',
};

export function ActivitiesCalendar() {
  const [currentDay, setCurrentDay] = useState(Utils.removeTime(new Date()));
  const [activities, setActivities] = useState([
    new Activity(
      'Colheita', 
      new Date('2023-05-30 10:00'), 
      new Date('2023-06-01 14:00'), 
      false,
      'Treviso', 
      Difficulty.HARD, 
      'Colher cuzin.',
      [
        new Person('John Doe', 28),
        new Person('Jane Smith', 34)
      ],
      new Person('Alice Brown', 30)),
    new Activity(
      'Plantação', 
      new Date('2023-06-01 10:00'), 
      new Date('2023-06-10 14:00'), 
      false,
      'Treviso', 
      Difficulty.MODERATE, 
      'Plantar cuzin.',
      [
        new Person('John Doe', 28)
      ],
      new Person('Alice Brown', 30))
  ]);
  const [dayActivities, setDayActivities] = useState(ActivityService.getByDate(activities, currentDay));

  return (
    <div className="grid grid-rows-3 grid-cols-6 justify-center">
      <Calendar 
        activities={activities} 
        setCurrentDay={setCurrentDay}
        setDayActivities={setDayActivities}
      />
      <DayDetails 
        activities={activities}
        setActivities={setActivities}
        dayActivities={dayActivities} 
        setDayActivities={setDayActivities}
        currentDay={currentDay}
      />
    </div>
  );
}
