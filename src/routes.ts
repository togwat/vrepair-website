import { type RouteConfig, index, route } from '@react-router/dev/routes'
import { ABOUT_ROUTE, BOOKING_ROUTE } from './constants/Paths'

export default [
    index('pages/home/Home.tsx'),
    route(ABOUT_ROUTE, 'pages/about/About.tsx'),
    route(BOOKING_ROUTE, 'pages/booking/Booking.tsx'),
] satisfies RouteConfig
