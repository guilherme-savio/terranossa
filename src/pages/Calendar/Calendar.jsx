import React, { useState } from "react";
import Day from "./Day";

const Difficulty = {
  EASY: 'Easy',
  MODERATE: 'Moderate',
  DIFFICULT: 'Difficult'
};

export function Calendar() {
  const activities = [
    {
      id: 1,
      name: "Colheita",
      date: new Date("2023-05-15"),
      startTime: "10:00",
      endTime: "14:00",
      duration: 3630,
      location: "Mount Rainier",
      difficulty: Difficulty.MODERATE,
      notes: "Bring plenty of water and sunscreen.",
      participants: [
        { name: "John Doe", age: 28 },
        { name: "Jane Smith", age: 34 },
      ],
      organizer: { name: "Alice Brown", email: "alice@example.com" }
    }
  ];

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
      const activity = activities.find(x => 
        x.date.getFullYear() === currentDate.getFullYear() &&
        x.date.getMonth() === currentDate.getMonth() &&
        x.date.getDate() === i);
      
      days.push(<Day activity={activity}>{i}</Day>);
    }

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    for (let i = 0; i < firstDay; i++) {
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