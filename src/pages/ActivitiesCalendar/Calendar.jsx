import React, { useState } from 'react';
import Day from './Day';

export default function Calendar({ activities, currentActivity, setCurrentActivity }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const hasActivity = currentActivity != null;

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

      days.push(
        <Day 
          key={date} 
          activity={activity} 
          isHeader={false} 
          setCurrentActivity={setCurrentActivity}
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

  function removeTime(date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }

  return (
    <div 
      className={"col-span-4 " + (hasActivity ? "col-start-3 " : "col-start-2 ")}>
      <div 
        className="col-span-4 grid grid-cols-6 grid-rows-1 calendar-header mb-4">
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
