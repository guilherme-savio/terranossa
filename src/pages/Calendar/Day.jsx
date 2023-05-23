import Activity from './Activity';

export default function Day({ children, isHeader, activity }) {
  const hasActivity = activity != null;

  return (
    <>
      <label
        htmlFor={hasActivity ? activity.id : null}
        className={
          // (isHeader ? "badge-primary " : null) +
          (hasActivity ? "badge-secondary text-white cursor-pointer " : "cursor-default ") +
          "'calendar-day bg-primary-100 rounded-lg shadow-sm p-2"
        }
      >
        {children} {activity?.name}
      </label>
      {hasActivity ? <Activity activity={activity} /> : null}
    </>
  );
}
