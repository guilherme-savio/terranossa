import React, { useState, useContext } from 'react';
import Day from './Day';
import ActivityService from './services/ActivityService';
import ActivityContext from './contexts/ActivityContext';

export default function Calendar() {
  const { activities } = useContext(ActivityContext);
  const [currentDate, setCurrentDate] = useState(new Date());

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
      const date = new Date(year, month, i);

      days.push(
        <Day 
          key={date.getTime()} 
          date={date}
          hasActivity={ActivityService.hasInDate(activities, date)} 
          isHeader={false}
        >
          {i}
        </Day>);
    }

    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
      days.unshift(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    return days;
  }

  return (
    <div className={"col-span-3 bg-neutral-100 rounded-lg shadow-md p-4 m-2 "}>
      <div className="col-span-4 grid grid-cols-6 grid-rows-1 calendar-header mb-4">
        <button className="btn btn-primary col-span-1" onClick={handlePrevMonth}>
          Prev
        </button>
        <h2 className="text-center text-lg font-semibold col-span-4">
          {currentDate.toLocaleDateString(undefined, {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <button className="btn btn-primary col-span-" onClick={handleNextMonth}>
          Next
        </button>
      </div>
      <div className="calendar-grid row-span-2 col-span-4 grid grid-cols-7 gap-4">
        <Day>Dom</Day>
        <Day>Seg</Day>
        <Day>Ter</Day>
        <Day>Qua</Day>
        <Day>Qui</Day>
        <Day>Sex</Day>
        <Day>Sáb</Day>
        {renderCalendarDays()}
      </div>
    </div>
  );
}
