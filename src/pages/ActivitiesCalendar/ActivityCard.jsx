import React, { useContext, useState, useRef } from 'react';
import DateProgress from './DateProgress';
import DayActivityContext from './contexts/DayActivityContext';

export default function ActivityCard({ activity }) {
  const { dayActivities, setDayActivities } = useContext(DayActivityContext);
  const [showOptions, setShowOptions] = useState(false);

  const enableEdit = activity.enableEdit || false;

  const handleNameChange = (e) => {
    const updatedActivities = dayActivities.map((a) => {
      if (a.id === activity.id) {
        return { ...a, name: e.target.value };
      }

      return a;
    });

    setDayActivities(updatedActivities);
  };

  const toggleEdit = () => {
    const updatedActivities = dayActivities.map((a) => {
      if (a.id === activity.id) {
        return { ...a, enableEdit: !enableEdit };
      }

      return a;
    });

    setDayActivities(updatedActivities);
  };

  const deleteActivity = () => {
    const updatedActivities = dayActivities.map((a) => {
      if (a.id === activity.id) {
        return { ...a, delete: true };
      }
    });

    setDayActivities(updatedActivities);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <li key={activity.id} className="bg-neutral-100 rounded-lg shadow-md p-4 m-2">
      <div className="relative flex items-center mb-1">
        <input
          className="flex-grow"
          value={activity.name}
          onChange={handleNameChange}
          disabled={!enableEdit}
        />
        <button onClick={toggleEdit} className="ml-2 w-5">
          <img
            src="src/assets/img/edit.png"
            alt="edit"
            className="object-cover"
          />
        </button>
        <button onClick={toggleOptions} className="ml-2 w-5">
          <img
            src="src/assets/img/info.png"
            alt="info"
            className="object-cover"
          />
        </button>
        {showOptions && (
          <div className="absolute bg-white shadow-md mt-2 py-2 px-4 rounded-lg right-0 top-5">
            <button onClick={deleteActivity}>Excluir</button>
          </div>
        )}
      </div>
      <DateProgress startDate={activity.startDate} endDate={activity.endDate} />
    </li>
  );
}
