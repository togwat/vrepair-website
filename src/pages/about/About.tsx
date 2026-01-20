import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './components/css/About.css'

export default function About() {
    document.title = "About | E-Store"

    return (
        <>
            <Navbar />
            <section className="about-section">
                <h1>About Us</h1>
                <p><strong>E-Store</strong> is the retail and service brand of <strong>vRepair Limited</strong>, a trusted electronic repair specialist based in Milford, Auckland. It is our mission to deliver reliable, high-quality repairs and personalised service for the devices people use in their everyday lives. </p>
                <p></p>
            </section>
            <Footer />
        </>
    )
}