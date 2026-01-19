import './css/BookingButton.css'
import HeroButton from './HeroButton'

export default function BookingButton() {
    return (
        <div className="booking-button">
            <HeroButton link="/booking">
                Book a Repair
                <span className="material-symbols-outlined">arrow_forward</span>
            </HeroButton>
        </div>
    )
}