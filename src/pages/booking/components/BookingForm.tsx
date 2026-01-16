import './css/BookingForm.css'

export default function BookingForm() {
    return (
        <form className="booking-form">
            <div className="booking-form-field booking-form-row">
                <label htmlFor="name">Name</label>
                <input className="transition-default" type="text" name="name" id="name" required />
            </div>
            <div className="booking-form-row" id="contact-details">
                <div className="booking-form-field">
                    <label htmlFor="email">Email address</label>
                    <input className="transition-default" type="email" name="email" id="email" required />
                </div>
                <div className="booking-form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input className="transition-default" type="tel" name="phone" id="phone" required />
                </div>
            </div>
            <div className="booking-form-field booking-form-row">
                <label htmlFor="device">Device type</label>
                <input className="transition-default" type="text" name="device" id="device" required />
            </div>
            <div className="booking-form-field booking-form-row">
                <label htmlFor="problem">Problem description</label>
                <textarea className="transition-default" name="problem" id="problem" placeholder="Describe the issue (e.g., cracked screen, battery drain, won't turn on...)" required />
            </div>
            <button className="booking-form-submit transition-default" type="submit">Submit repair request</button>
        </form>
    )
}