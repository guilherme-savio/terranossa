export function WeekWeather( {weatherapi} ) {
    
    const dayData = weatherapi["current"];
    const forecastDay = weatherapi["forecast"]["forecastday"][0]["day"];

    let imgSrc, imgAlt = null;

    if(dayData["precip_mm"] > 0) {
        imgSrc = "chuva";
        imgAlt = "Chuva";
    }
    else if(dayData["cloud"] == 0 && dayData["is_day"] == 0) {
        imgSrc = "lua";
        imgAlt = "Noite sem nuvens.";
    }
    else if(dayData["cloud"] == 1 && dayData["is_day"] == 0) {
        imgSrc = "nuvem-lua";
        imgAlt = "Noite nublada.";
    }
    else if(dayData["cloud"] == 0 && dayData["is_day"] == 1) {
        imgSrc = "sol";
        imgAlt = "Dia sem nuvems.";
    }
    else {
        imgSrc = "dia_nebuloso";
        imgAlt = "Dia nublado.";
    }

    return <div className="card w-96 h-full mt-5 me-5 shadow-xl" style={{background: "radial-gradient(black, transparent)"}}>
        <figure className="realtive"><img src={`src/pages/WeeklyCare/assets/${imgSrc}.png`} alt={imgAlt} className="w-[85%] p-[25px] blur-sm"/></figure>
        <div className="card-body">
            <div className="card-title justify-center absolute top-[33%] left-[50%]" style={{transform: "translate(-50%, -50%)", fontSize: "40px", color: "rgb(100, 100, 100)" }}>{dayData["temp_c"]}°C</div>
            <div className="flex w-full">
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-3" src="src\pages\WeeklyCare\assets\flecha-ondulante.png" alt="Vento" />
                        <span className="justify-center text-base-100">{dayData["wind_kph"]}km/h</span>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\gotas.png" alt="Umidade" />
                        <span className="justify-center text-base-100">{dayData["humidity"]}%</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\aquecimento-global.png" alt="Temperatura Máxima" />
                        <span className="justify-center text-base-100">{forecastDay["maxtemp_c"]}°C</span>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\frio.png" alt="Temperatura Mínima" />
                        <span className="justify-center text-base-100">{forecastDay["mintemp_c"]}°C</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}