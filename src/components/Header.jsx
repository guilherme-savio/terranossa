import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <nav className='p-2 space-x-6'>
      <NavLink to="/" title="Home">Home</NavLink>
      <NavLink to="/weekly-care" title="WeeklyCare">Cuidados Semanais</NavLink>
      <NavLink to="/average-harvest" title="AverageHarvest">Colheitas</NavLink>
      <NavLink to="/calendar" title="Calendar">Calendário</NavLink>
    </nav>
  )
}