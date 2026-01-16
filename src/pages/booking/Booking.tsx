import Navbar from '../../components/Navbar'
import Footer from '../home/components/Footer'
import BookingForm from './components/BookingForm'
import './components/css/Booking.css'

export default function Booking() {
    document.title = "Book a repair request | E-Store"

    return (
        <>
            <Navbar />
            <section className="main-section">
                <div className="booking-text">
                    <h1>Book a Repair Request</h1>
                    <p>Fill out fill out fill out fill out fill out. Fill out fill out fill out, fill out fill out fill out. Fill out fill out fill out fill out fill out. Fill out fill out fill out, fill out fill out fill out.</p>
                </div>
                <BookingForm />
            </section>
            <Footer />
        </>
    )   
}