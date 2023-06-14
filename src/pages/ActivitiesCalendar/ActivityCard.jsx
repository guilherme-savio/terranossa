import React, { useContext } from 'react';
import DateProgress from './DateProgress';
import DayActivityContext from './contexts/DayActivityContext';

export default function ActivityCard({ activity }) {
  const { dayActivities, setDayActivities } = useContext(DayActivityContext);

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
            src="src/pages/ActivitiesCalendar/assets/edit.png"
            alt="edit"
            className="object-cover"
          />
        </button>
        <button className="ml-2 w-5">
          <img
            src="src/pages/ActivitiesCalendar/assets/save.png"
            alt="save"
            className="object-cover"
          />
        </button>
      </div>
      <DateProgress startDate={activity.startDate} endDate={activity.endDate} />
    </li>
  );
}
