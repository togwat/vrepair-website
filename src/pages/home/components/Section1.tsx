import Section1Box from "./Section1Box";
import './css/Section1.css'

export default function Section1() {
    return (
        <section className="section1">
            <div className="section1-text">
                <h2>What we do</h2>
                <h3>Comprehensive Repair Solutions</h3>
                <p>Hardware and software expertise for all major brands.</p>
            </div>

            <div className="section1-boxes">
                <Section1Box accentColour1="#E55B18" accentColour2="#FFEDD5" icon="smartphone">
                    <h4>Mobile Devices</h4>
                </Section1Box>

                <Section1Box accentColour1="#2564EB" accentColour2="#DBEAFE" icon="computer">
                    <h4>Laptops & Computers</h4>
                </Section1Box>

                <Section1Box accentColour1="#9233EA" accentColour2="#F3E8FF" icon="settings_system_daydream">
                    <h4>Software & Network</h4>
                </Section1Box>
            </div>
        </section>
    )
}