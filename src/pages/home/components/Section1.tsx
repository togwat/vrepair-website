import Section1Box from "./Section1Box";
import './css/Section1.css'

export default function Section1() {
    return (
        <section className="section1">
            <h2>Comprehensive repair solutions</h2>
            <p>Hardware and software expertise for all major brands.</p>

            <div className="section1-boxes">
                <Section1Box accentColour1="#E55B18" accentColour2="#FFEDD5" icon="smartphone">
                    <h3>Mobile Devices</h3>
                </Section1Box>

                <Section1Box accentColour1="#2564EB" accentColour2="#DBEAFE" icon="computer">
                    <h3>Laptops & Computers</h3>
                </Section1Box>

                <Section1Box accentColour1="#9233EA" accentColour2="#F3E8FF" icon="settings_system_daydream">
                    <h3>Software & Network</h3>
                </Section1Box>
            </div>
        </section>
    )
}