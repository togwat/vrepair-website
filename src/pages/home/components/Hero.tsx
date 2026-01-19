import BookingButton from './BookingButton'
import './css/Sections.css'
import './css/Hero.css'
import HeroBackground from './HeroBackground'
import HeroButton from './HeroButton'
import HeroVerify from './HeroVerify'

export default function Hero() {
    return (
        <header className="hero">
            <HeroBackground />
            <div className="hero-content">
                <h1 className="hero-title">Expert Repair Services <span className="hero-title-coloured">You Can Trust.</span></h1>
                <p className="hero-subtitle">Fast, professional repairs for phones, laptops, and electronic devices in Auckland. We bring your Apple, Android, and PC devices back to life. </p>

                <div className="hero-buttons">
                    <BookingButton />
                    <HeroButton link="#services">View Services</HeroButton>
                </div>

                <div className="hero-verify-container">
                    <HeroVerify text="Fully Operational" />
                    <HeroVerify text="NZ-Registered Company" />
                    <HeroVerify text="Warranty Included" />
                </div>
            </div>
        </header>
    )
}