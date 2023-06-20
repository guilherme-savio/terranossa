import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home/Home'
import { WeeklyCare } from './pages/WeeklyCare/WeeklyCare'
import { AverageHarvest } from './pages/AverageHarvest'
import { ActivitiesCalendar } from './pages/ActivitiesCalendar/ActivitiesCalendar'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/weekly-care" element={<WeeklyCare />} />
        <Route path="/average-harvest" element={<AverageHarvest />} />
        <Route path="/activities-calendar" element={<ActivitiesCalendar />} />
      </Route>
    </Routes>
  )
}
