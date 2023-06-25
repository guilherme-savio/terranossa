import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home/Home'
import { WeeklyCare } from './pages/WeeklyCare/WeeklyCare'
import { Team } from './pages/Team/Team'
import { ActivitiesCalendar } from './pages/ActivitiesCalendar/ActivitiesCalendar'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/weekly-care" element={<WeeklyCare />} />
        <Route path="/team" element={<Team />} />
        <Route path="/activities-calendar" element={<ActivitiesCalendar />} />
      </Route>
    </Routes>
  )
}
