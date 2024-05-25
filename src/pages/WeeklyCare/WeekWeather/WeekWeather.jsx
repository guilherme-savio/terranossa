export function WeekWeather() {

    return <div className="card w-96 h-full mt-5 me-5 shadow-xl" style={{background: "radial-gradient(black, transparent)"}}>
        <figure className="realtive"><img src={`src/pages/WeeklyCare/assets/sol.png`} alt="Dia limpo" className="w-[85%] p-[25px] blur-sm"/></figure>
        <div className="card-body">
            <div className="card-title justify-center absolute top-[33%] left-[50%]" style={{transform: "translate(-50%, -50%)", fontSize: "40px", color: "rgb(100, 100, 100)" }}>15°C</div>
            <div className="flex w-full">
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-3" src="src\pages\WeeklyCare\assets\flecha-ondulante.png" alt="Vento" />
                        <span className="justify-center text-base-100">20km/h</span>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\gotas.png" alt="Umidade" />
                        <span className="justify-center text-base-100">50%</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\aquecimento-global.png" alt="Temperatura Máxima" />
                        <span className="justify-center text-base-100">26°C</span>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="w-1/2 h-10">
                    <div className="grid grid-cols-3 h-full flex-grow card rounded-box place-items-center" style={{background: "rgb(241,245,249,0.2)" }}>
                        <img className="w-4 h-4 mr-2" src="src\pages\WeeklyCare\assets\frio.png" alt="Temperatura Mínima" />
                        <span className="justify-center text-base-100">10°C</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}