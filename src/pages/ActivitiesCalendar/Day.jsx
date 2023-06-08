export default function Day({ date, children, isHeader, hasActivity, setCurrentDay }) {
  return (
    <div
      className={
        (isHeader ? "badge-primary " : "") +
        (hasActivity ? "badge-secondary text-white cursor-pointer " : "cursor-default ") +
        "calendar-day bg-primary-100 rounded-lg shadow-sm p-2"
      }
      onClick={() => setCurrentDay(date)}
    >
      {children}
    </div>
  );
}
