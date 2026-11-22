import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Booking from './pages/booking/Booking'
import About from './pages/about/About'
import { ABOUT_ROUTE, BOOKING_ROUTE } from './constants/Paths'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={BOOKING_ROUTE} element={<Booking />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
