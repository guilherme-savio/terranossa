export function ProgressBar({ value, day }) {
    
    return (
        <div className="-rotate-90 flex items-center">
            <img className="w-10 h-10" src="src\pages\WeeklyCare\assets\regador.png"></img>
            <progress className="progress progress-info w-80" value={value} max="100"></progress>
            <span className="rotate-90 inline-block">{day}</span>
        </div>
    );
}