export default function Day({ children, isHeader, activity, setCurrentActivity }) {
  const hasActivity = activity != null;

  return (
    <>
      <div
        className={
          (isHeader ? "badge-primary " : "") +
          (hasActivity ? "badge-secondary text-white cursor-pointer " : "cursor-default ") +
          "calendar-day bg-primary-100 rounded-lg shadow-sm p-2"
        }
        onClick={() => setCurrentActivity(hasActivity ? activity : null)}
      >
        {children}
      </div>
    </>
  );
}
