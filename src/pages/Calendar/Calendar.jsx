import React, { useState } from "react";
import Day from "./Day";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  function handlePrevMonth() {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  }

  function renderCalendarDays() {
    const days = [];
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= lastDay; i++) {
      days.push(<Day>{i}</Day>);
    }

    const firstDayIndex = currentDate.getDay();
    for (let i = 0; i < firstDayIndex; i++) {
      days.unshift(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    return days;
  }

  return (
    <div className="calendar bg-neutral-100 rounded-lg shadow-md p-4">
      <div className="calendar-header mb-4">
        <button className="btn btn-primary" onClick={handlePrevMonth}>Prev</button>
        <h2 className="text-lg font-semibold">{currentDate.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</h2>
        <button className="btn btn-primary" onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-4">
        <Day>Domingo</Day>
        <Day>Segunda-feira</Day>
        <Day>Terça-feira</Day>
        <Day>Quarta-feira</Day>
        <Day>Quinta-feira</Day>
        <Day>Sexta-feira</Day>
        <Day>Sábado</Day>
        {renderCalendarDays()}
      </div>
    </div>
  );
}