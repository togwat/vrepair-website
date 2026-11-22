import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookingForm from './components/BookingForm'
import './components/css/Booking.css'
import Seo from '../../components/SeoHead'
import { BOOKING_ROUTE } from '../../constants/Paths'

export default function Booking() {
    return (
        <>
            <Seo 
                title={"Book a repair request | E-Store"}
                description={"Book a phone, tablet or laptop repair online and get a free quote. No fix no fee."}
                path={BOOKING_ROUTE}
            />
            <Navbar />
            <section className="booking-section">
                <div className="booking-text">
                    <h1>Book a Repair Request</h1>
                    <p>This form will be submitted through our internal system. We will reply via email for followup details.</p>
                </div>
                <BookingForm />
            </section>
            <Footer />
        </>
    )   
}