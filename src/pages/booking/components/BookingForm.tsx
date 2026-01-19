import { useState } from 'react'
import './css/BookingForm.css'

export default function BookingForm() {
    // disable submission button when already submitting
    const [submitting, setSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<
        | { type: "success" }
        | { type: "error" }
        | null
    >(null);

    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        
        setSubmitting(true);

        // check if all required fields are filled
        const form = new FormData(e.currentTarget);

        const name = form.get("name")?.toString().trim();
        const email = form.get("email")?.toString().trim();
        const phone = form.get("phone")?.toString().trim();
        const device = form.get("device")?.toString().trim();
        const problem = form.get("problem")?.toString().trim();

        const emailSubject = `Website repair request: ${name}`;
        const emailText = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Device: ${device}
        
        Problem: 
        ${problem}
        `;

        try {
            const response = await sendBookingMail(emailSubject, emailText);

            console.log(response);
            setSubmitResult({ type: "success" });
        } catch (err: any) {
            const errorMessage = `Error on submit: ${err?.response || err?.message}`;
            console.log(errorMessage)
            setSubmitResult({type: "error" });
        }
        
        setSubmitting(false);
    }

    async function sendBookingMail(subject: string, text: string) {
        const response = await fetch("http://localhost:3001/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                subject,
                text,
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error);
        }
        return data;
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form-field booking-form-row">
                <label htmlFor="name" className="required">Name</label>
                <input className="transition-default" type="text" name="name" id="name" required />
            </div>
            <div className="booking-form-row" id="contact-details">
                <div className="booking-form-field">
                    <label htmlFor="email" className="required">Email address</label>
                    <input className="transition-default" type="email" name="email" id="email" required />
                </div>
                <div className="booking-form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input className="transition-default" type="tel" name="phone" id="phone" />
                </div>
            </div>
            <div className="booking-form-field booking-form-row">
                <label htmlFor="device" className="required">Device type</label>
                <input className="transition-default" type="text" name="device" id="device" placeholder="(e.g. iPhone 15, Dell laptop...)" required />
            </div>
            <div className="booking-form-field booking-form-row">
                <label htmlFor="problem" className="required">Problem description</label>
                <textarea className="transition-default" name="problem" id="problem" placeholder="Describe the issue (e.g. cracked screen, battery drain, won't turn on...)" required />
            </div>
            <button className="booking-form-submit transition-default" type="submit" disabled={submitting}>
                {submitting
                    ? "Submitting..."
                    : "Submit repair request"
                }
            </button>

            {submitResult && (
                <p className={`booking-form-result 
                    ${submitResult.type === "success"
                        ? "booking-form-result--success"
                        : "booking-form-result--error"}`
                    }
                >
                    {submitResult.type === "success"
                        ? "Request submitted successfully."
                        : "Error during submission. Please contact us directly or visit us for repairs."
                    }
                </p>
            )}
        </form>
    )
}