import React, { useState } from "react";
import Activity from "./Activity";

export default function Day({ children, activity }) {
  const [showModal, setShowModal] = useState(false);
  const hasActivity = activity != null;

  const handleClick = () => {
    if (!hasActivity) return;

    setShowModal(!showModal);
  }

  return (
    <div 
      className=
      {
        (hasActivity ? "cursor-pointer " : "cursor-default ") + 
        "calendar-day bg-primary-100 rounded-lg shadow-sm p-2"
      } 
      onClick={handleClick}>
      {children}
      {showModal && <Activity activity={activity}/>}
    </div>
  );
}