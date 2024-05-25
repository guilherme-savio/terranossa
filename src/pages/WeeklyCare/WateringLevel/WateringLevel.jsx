import { ProgressBar } from "./ProgressBar";


export function WateringLevel() {
    return (
        <div className="card w-auto h-full mt-5 ms-5 shadow-xl" style={{background: "radial-gradient(black, transparent)"}}>
            <div className="card-body">
                <h2 className="card-title text-base-100">Estimativa de rega nos próximos dias:</h2>
                <div className="grid grid-cols-7 place-items-center relative top-[38%] h-20">
                    <ProgressBar value={30} day={"Seg"}/>
                    <ProgressBar value={70} day={"Ter"}/>
                    <ProgressBar value={80} day={"Qua"}/>
                    <ProgressBar value={90} day={"Qui"}/>
                    <ProgressBar value={20} day={"Sex"}/>
                    <ProgressBar value={10} day={"Sab"}/>
                    <ProgressBar value={0}  day={"Dom"}/>
                </div>
            </div>
        </div>
    );
}  