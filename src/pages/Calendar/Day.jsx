export default function Day({ children }) {
  return (
    <div className="calendar-day bg-primary-100 rounded-lg shadow-sm p-2">
      {children}
    </div>
  );
}