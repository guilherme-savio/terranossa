import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="navbar bg-primary rounded-box shadow-xl text-base-100 mb-10">
      <div className="flex-1">
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">TerraNossa</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/" title="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/weekly-care" title="WeeklyCare">
              Cuidados Semanais
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/average-harvest" title="AverageHarvest">
              Colheitas
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-base-100 active:text-accent" to="/activities-calendar" title="Calendar">
              Calendário
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
