import type { Config } from '@react-router/dev/config'
import { HOME_ROUTE, ABOUT_ROUTE, BOOKING_ROUTE } from './src/constants/Paths'

export default {
  appDirectory: 'src',
  ssr: false,
  prerender: [HOME_ROUTE, ABOUT_ROUTE, BOOKING_ROUTE],
} satisfies Config
