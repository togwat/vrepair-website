import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './components/css/About.css'
import AboutContact from './components/AboutContact'
import Seo from '../../components/SeoHead'
import { ABOUT_ROUTE } from '../../constants/Paths'

export default function About() {
    return (
        <>
            <Seo 
                title={"About | E-Store"}
                description={"Apple & Samsung repair specialists in Milford, Auckland. Screens, batteries, liquid damage, motherboard repairs, software and network services."}
                path={ABOUT_ROUTE}
            />
            <Navbar />
            <section className="about-section">
                <h1>About Us</h1>
                <p><strong>E-Store</strong> is the retail and service brand of <strong>vRepair Limited</strong>, a trusted electronic repair specialist based in Milford, Auckland. It is our mission to deliver reliable, high-quality repairs and personalised service for the devices people use in their everyday lives.</p>

                <h2>What We Do</h2>
                <h3>Repair Services</h3>
                <p>We specialise in repairs for Apple and Samsung devices, including iPhones, iPads, Samsung mobile phones, and tablets. Our services range from screen and battery replacements to component and motherboard-level repairs.</p>
                <p>We handle a wide range of device issues, such as liquid damage, broken screens, battery faults, and general hardware or software problems for phones and laptops.</p>
                <h3>Technology Services</h3>
                <p>We offer software services for your devices, such as operating system installation, malware removal, data backup, and complex software troubleshooting.</p>
                <p>There are on-site services available for home & business network setup, Wi-Fi connectivity, and printer connection issues.</p>
                <h3>Product Offerings</h3>
                <p>In addition to repair services, we sell quality second-hand mobile phones at competitive prices, and you can trade in phones you no longer need with fair compensation.</p>
                <p>We also stock a selection of phone and computer accessories, including cases, screen protectors, charging cables, headphones, keyboards, Bluetooth speakers, and more.</p>
                
                <h2>Our Policies</h2>
                <h3>No Fix, No Fee Guarantee</h3>
                <p>If a device fault is identified and a quote is approved but our technician is unable to repair the device, we will not charge any fee.</p>
                <h3>Free Quote Policy</h3>
                <p>We provide free initial quotes for external inspections or quick, non-invasive checks. A <strong>diagnostic fee</strong> applies only when a more detailed or time-consuming diagnosis is required and the customer chooses to decline a reasonable repair quote.</p>
                <p>If you later decide to proceed with the repair, the diagnostic fee will be fully credited toward the final repair cost.</p>
                <h3>Warranty</h3>
                <p>We offer a <strong>3-month warranty</strong> for general repairs and a <strong>6-month extended warranty</strong> for battery replacements.</p>
                <p>Our warranty only covers the specific part repaired or service provided. It does not cover any new liquid damage, accidental damage, or physical impact occuring after the repair has been completed.</p>

                <h2>Contact Us</h2>
                <p>Visit our store in Milford or get in touch for a quote.</p>
                <AboutContact />
            </section>
            <Footer />
        </>
    )
}