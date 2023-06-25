import React, { useContext, useState, useRef } from 'react';
import DateProgress from '../../components/DateProgress';
import DayActivityContext from './contexts/DayActivityContext';
import ActivityService from '../../services/ActivityService';
import CurrentDayContext from './contexts/CurrentDayContext';

export default function ActivityCard({ activity }) {
  const { currentDay } = useContext(CurrentDayContext);
  const { dayActivities, setDayActivities } = useContext(DayActivityContext);
  const [showOptions, setShowOptions] = useState(false);

  const editable = activity.editable || false;

  const handleNameChange = (e) => {
    ActivityService.updateActivity({ ...activity, name: e.target.value });
    updateDayActivities();
  };

  const toggleEdit = () => {
    ActivityService.updateActivity({ ...activity, editable: !activity.editable });
    updateDayActivities();
  };

  const deleteActivity = () => {
    ActivityService.deleteActivity(activity);
    updateDayActivities();
  };

  const updateDayActivities = () => {
    setDayActivities(ActivityService.getByDate(currentDay));
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <li key={activity.id} className="bg-neutral-100 rounded-lg shadow-md p-4 m-2">
      <div className="relative flex items-center mb-1">
        <input
          className="flex-grow input input-xs pl-2"
          value={activity.name}
          onChange={handleNameChange}
          disabled={!editable}
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
