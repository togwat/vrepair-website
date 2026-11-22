import { BOOKING_ROUTE } from '../../../constants/Paths'
import './css/BookingButton.css'
import HeroButton from './HeroButton'

export default function BookingButton() {
    return (
        <div className="booking-button">
            <HeroButton link={BOOKING_ROUTE}>
                Request a Quote
                <span className="material-symbols-outlined">arrow_forward</span>
            </HeroButton>
        </div>
    )
}