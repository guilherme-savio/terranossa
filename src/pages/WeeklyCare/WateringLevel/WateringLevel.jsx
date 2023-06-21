import { ProgressBar } from "./ProgressBar";


export function WateringLevel({weatherapi}) {

    let weatherapiDays = {
        0: [weatherapi[0]["date_epoch"],weatherapi[0]["day"]["daily_chance_of_rain"]],
        1: [weatherapi[1]["date_epoch"],weatherapi[1]["day"]["daily_chance_of_rain"]],
        2: [weatherapi[2]["date_epoch"],weatherapi[2]["day"]["daily_chance_of_rain"]],
        3: [weatherapi[3]["date_epoch"],weatherapi[3]["day"]["daily_chance_of_rain"]],
        4: [weatherapi[4]["date_epoch"],weatherapi[4]["day"]["daily_chance_of_rain"]],
        5: [weatherapi[5]["date_epoch"],weatherapi[5]["day"]["daily_chance_of_rain"]],
        6: [weatherapi[6]["date_epoch"],weatherapi[6]["day"]["daily_chance_of_rain"]]
    };

    const getDay = (timestamp) => {
        const weekReference = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]
        let dateValue = new Date(timestamp * 1000).getDay();
        return weekReference[dateValue]
    }

    const getValue = (chanceOfRain) => {
        return 100 - chanceOfRain;
    }
    
    return (
        <div className="card w-auto h-full mt-5 ms-5 shadow-xl" style={{background: "radial-gradient(black, transparent)"}}>
            <div className="card-body">
                <h2 className="card-title text-base-100">Estimativa de rega nos próximos dias:</h2>
                <div className="grid grid-cols-7 place-items-center relative top-[38%] h-20">
                    <ProgressBar value={getValue(weatherapiDays["1"][1])} day={getDay(weatherapiDays["1"][0])}/>
                    <ProgressBar value={getValue(weatherapiDays["2"][1])} day={getDay(weatherapiDays["2"][0])}/>
                    <ProgressBar value={getValue(weatherapiDays["3"][1])} day={getDay(weatherapiDays["3"][0])}/>
                    <ProgressBar value={getValue(weatherapiDays["4"][1])} day={getDay(weatherapiDays["4"][0])}/>
                    <ProgressBar value={getValue(weatherapiDays["5"][1])} day={getDay(weatherapiDays["5"][0])}/>
                    <ProgressBar value={getValue(weatherapiDays["6"][1])} day={getDay(weatherapiDays["6"][0])}/>
                    <ProgressBar value={getValue(weatherapiDays["0"][1])} day={getDay(weatherapiDays["0"][0])}/>
                </div>
            </div>
        </div>
    );
}  