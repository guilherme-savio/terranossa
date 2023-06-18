import background from "../assets/img/home_background.jpg";
import aboutImg from "../assets/img/home_about.jpg";

export function Home() {
  return (
    <div>
      <div
        className="absolute inset-0 -z-50 w-full h-screen"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        className="text-base-100 flex flex-col justify-center h-screen"
        style={{ height: "calc(100vh - 137px)" }}
      >
        <h1>Gerencie e participe de</h1>
        <h1>hortas comunitárias</h1>
      </div>

      {/* Descrição do que são hortas comunitárias */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 items-center -mt-20">
        <div className="md:w-1/2 lg:1/4 sm:w-full">
          <h2 className="text-primary">Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <img
          src={aboutImg}
          className="rounded-lg"
          style={{ height: "600px" }}
        />
      </div>

      {/* Descrição do Projeto */}
      <div className="w-1/2 text-center m-auto my-20">
        <h2 className="text-primary">O Projeto</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow h-40 w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <img className="inline-block w-10 h-10 stroke-current fill-primary" src="src/assets/icons/grains.svg"></img>
          </div>
          <div className="stat-title">Canteiros Observados</div>
          <div className="stat-value">300</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <img className="inline-block w-10 h-10 stroke-current fill-primary" src="src/assets/icons/harvest.svg"></img>
          </div>
          <div className="stat-title">Alimentos produzidos</div>
          <div className="stat-value">21.000</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img className="inline-block w-10 h-10 stroke-current fill-primary" src="src/assets/icons/communities.svg"></img>
          </div>
          <div className="stat-title">Famílias apoiadas</div>
          <div className="stat-value">1,200</div>
        </div>
      </div>
    </div>
  );
}
