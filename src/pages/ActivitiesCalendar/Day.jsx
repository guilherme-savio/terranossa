import { useContext } from 'react'
import CurrentDayContext from './contexts/CurrentDayContext';

export default function Day({ children, date, hasActivity, isHeader = true }) {
  const { setCurrentDay } = useContext(CurrentDayContext);

  return (
    <div
      className={
        (isHeader ? "badge-primary " : "") +
        (hasActivity ? "badge-secondary text-white cursor-pointer " : "cursor-default ") +
        "calendar-day bg-primary-100 rounded-lg shadow-sm p-2"
      }
      onClick={() => date !== undefined && setCurrentDay(date)}
    >
      {children}
    </div>
  );
}
