import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { WeeklyCare } from './pages/WeeklyCare'
import { AverageHarvest } from './pages/AverageHarvest'
import { Calendar } from './pages/Calendar/Calendar'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/weekly-care" element={<WeeklyCare />} />
        <Route path="/average-harvest" element={<AverageHarvest />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  )
}
