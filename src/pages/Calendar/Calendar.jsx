import React, { useState } from 'react';
import Day from './Day';

const Difficulty = {
  EASY: 'Fácil',
  MODERATE: 'Moderado',
  HARD: 'Difícil',
};

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

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
      organizer: { name: 'Alice Brown', email: 'alice@example.com' },
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
      organizer: { name: 'Alice Brown', email: 'alice@example.com' },
    },
  ];

  function handlePrevMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  }

  function handleNextMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  }

  function renderCalendarDays() {
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDay; i++) {
      const date = new Date(year, month, i).getTime();
      const activity = activities.find(
        (activity) => {
          const startDate = removeTime(activity.startDate).getTime();
          const endDate = removeTime(activity.endDate).getTime();

          return (startDate === date || endDate === date || (startDate < date && endDate > date))
        }
      );

      days.push(<Day key={date} activity={activity}>{i}</Day>);
    }

    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
      days.unshift(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    return days;
  }

  function removeTime(date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }

  return (
    <div className="calendar bg-neutral-100 rounded-lg shadow-md p-4">
      <div className="calendar-header mb-4">
        <button className="btn btn-primary" onClick={handlePrevMonth}>
          Prev
        </button>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleDateString(undefined, {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <button className="btn btn-primary" onClick={handleNextMonth}>
          Next
        </button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-4">
        <Day isHeader={true}>Domingo</Day>
        <Day isHeader={true}>Segunda-feira</Day>
        <Day isHeader={true}>Terça-feira</Day>
        <Day isHeader={true}>Quarta-feira</Day>
        <Day isHeader={true}>Quinta-feira</Day>
        <Day isHeader={true}>Sexta-feira</Day>
        <Day isHeader={true}>Sábado</Day>
        {renderCalendarDays()}
      </div>
    </div>
  );
}
