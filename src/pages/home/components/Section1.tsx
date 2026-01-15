import Section1Box from "./Section1Box";
import './css/Section1.css'
import './css/Sections.css'

export default function Section1() {
    return (
        <section className="section1" id="services">
            <div className="section1-text">
                <h2>What we do</h2>
                <h3>Comprehensive Repair Solutions</h3>
                <p>Hardware and software expertise for all major brands.</p>
            </div>

            <div className="section1-boxes">
                <Section1Box accentColour1="var(--colour-icon-orange)" accentColour2="var(--colour-icon-orange-background)" icon="smartphone">
                    <h4>Mobile Devices</h4>
                    <ul className="section1-box-list">
                        <li><span className="coloured-list-dot"></span>Apple iPhone & iPad</li>
                        <li><span className="coloured-list-dot"></span>Android phones & tablets</li>
                        <li><span className="coloured-list-dot"></span>Screen & battery replacement</li>
                    </ul>
                </Section1Box>

                <Section1Box accentColour1="var(--colour-icon-blue)" accentColour2="var(--colour-icon-blue-background)" icon="computer">
                    <h4>Laptops & Computers</h4>
                    <ul className="section1-box-list">
                        <li><span className="coloured-list-dot"></span>Macbook, iMac & PC</li>
                        <li><span className="coloured-list-dot"></span>Motherboard repair</li>
                        <li><span className="coloured-list-dot"></span>Water damage restoration</li>
                    </ul>
                </Section1Box>

                <Section1Box accentColour1="var(--colour-icon-purple)" accentColour2="var(--colour-icon-purple-background)" icon="settings_system_daydream">
                    <h4>Software & Network</h4>
                    <ul className="section1-box-list">
                        <li><span className="coloured-list-dot"></span>OS reinstallation & malware removal</li>
                        <li><span className="coloured-list-dot"></span>Home/business network setup</li>
                        <li><span className="coloured-list-dot"></span>Wi-Fi & printer issues</li>
                    </ul>
                </Section1Box>
            </div>
        </section>
    )
}