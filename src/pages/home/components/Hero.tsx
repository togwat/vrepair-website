import BookingButton from './BookingButton'
import './css/Hero.css'
import HeroBackground from './HeroBackground'
import HeroButton from './HeroButton'
import HeroVerify from './HeroVerify'

export default function Hero() {
    return (
        <header className="hero">
            <HeroBackground />
            <div className="hero-content">
                <h1 className="hero-title">Main title Main Title Main title Main Title</h1>
                <p className="hero-subtitle">This is a subtitle that describes the main title. This is a subtitle that describes the main title. This is a subtitle that describes the main title. This is a subtitle that describes the main title. This is a subtitle that describes the main title.</p>

                <div className="hero-buttons">
                    <BookingButton />
                    <HeroButton link="todo">View Services</HeroButton>
                </div>

                <div className="hero-verify-container">
                    <HeroVerify text="Warranty Included" />
                    <HeroVerify text="Warranty Included" />
                    <HeroVerify text="Warranty Included" />
                </div>
            </div>
        </header>
    )
}