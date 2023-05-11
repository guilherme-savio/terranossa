export default function Activity({ activity }) {
  const hours = Math.floor(activity.duration / 3600);
  const remainingSeconds = activity.duration % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const duration = 
    (hours === 0 ? "" : hours + " horas ") + 
    (minutes === 0 ? "" : minutes + " minutos ") + 
    (seconds === 0 ? "" : seconds + " segundos");

  return (
    <div>{activity.name + " " + duration}</div>
  );
}