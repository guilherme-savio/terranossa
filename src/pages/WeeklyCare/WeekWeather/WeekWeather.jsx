export function WeekWeather() {
    return <div className="card w-96 mt-5 bg-base-100 shadow-xl">
        <figure style={{ position: "relative" }}><img src="src\pages\WeeklyCare\assets\nuvens.png" alt="Cloudy" style={{ width: "85%", filter: "blur(3px)", padding: "25px" }} /></figure>
        <div className="card-body">
            <div className="card-title justify-center" style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "40px", color: "rgb(100, 100, 100)" }}>21 °C</div>
            <div className="flex w-full">
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card bg-base-300 rounded-box place-items-center">
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\flecha-ondulante.png" alt="Vento" />
                        <span className="justify-center">Vento</span>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card bg-base-300 rounded-box place-items-center">
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\gotas.png" alt="Umidade" />
                        <span className="justify-center">Umidade</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card bg-base-300 rounded-box place-items-center">
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\aquecimento-global.png" alt="Temperatura Máxima" />
                        <span className="justify-center">Máxima</span>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card bg-base-300 rounded-box place-items-center">
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\frio.png" alt="Temperatura Mínima" />
                        <span className="justify-center">Mínima</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}