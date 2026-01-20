import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookingForm from './components/BookingForm'
import './components/css/Booking.css'

export default function Booking() {
    document.title = "Book a repair request | E-Store"

    return (
        <>
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