import DateProgress from './DateProgress';

export default function ActivityCard({ activity, activities, setActivities, dayActivities, setDayActivities }) {
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

  const saveChanges = () => {
    const updated = [...dayActivities];

    activities.map((activity) => {
      if (!dayActivities.some(a => a.id === activity.id)) {
        updated.push(activity);
      } 
    });

    setActivities(updated);
  }

  return (
    <li key={activity.id} className="bg-neutral-100 rounded-lg shadow-md p-4 m-2">
      <div className="relative flex items-center">
        <input 
          className="flex-grow" 
          value={activity.name} 
          onChange={handleNameChange} 
          disabled={!enableEdit}
        />
        <button onClick={toggleEdit} className="ml-2">
          <img
            src="src/pages/ActivitiesCalendar/assets/edit.png"
            alt="edit"
            className="w-[20%]"
          />
        </button>
        <button onClick={saveChanges} className={enableEdit ? "visible" : "invisible"}>
          <img
            src="src/pages/ActivitiesCalendar/assets/save.png"
            alt="edit"
            className="w-[20%]"
          />
        </button>
      </div>
      <DateProgress startDate={activity.startDate} endDate={activity.endDate} />
    </li>
  );
}
