import './css/Section2.css'
import './css/Sections.css'
import Section2Box from './Section2Box'
import Section2ListItem from './Section2ListItem'

export default function Section2() {
    return (
        <section className="section2">
            <div className="section2-text">
                <h2>Why choose us</h2>
                <h3>Reliable & Affordable Repairs</h3>

                <Section2ListItem accentColour1="var(--colour-icon-green)" accentColour2="var(--colour-icon-green-background" icon="money_off">
                    <h4>No Fix, No Fee Guarantee</h4>
                    <p>This applies strictly when our technician is ultimately <strong>unable to fix the device</strong>, even after the repair quote has been approved.</p>
                </Section2ListItem>

                <Section2ListItem accentColour1="var(--colour-icon-blue)" accentColour2="var(--colour-icon-blue-background)" icon="receipt_long">                    
                    <h4>Free Quote Policy</h4>
                    <p>Initial quotes are free for external checks or quick, non-invasive disassembly. A <strong>diagnostic fee</strong> applies <strong>only</strong> if a lengthy diagnosis is performed and the customer chooses to <strong>decline</strong> a reasonable repair quote. This fee will be fully credited towards the repair cost if the customer proceeds with the repair later. </p>
                </Section2ListItem>

                <Section2ListItem accentColour1="var(--colour-icon-orange)" accentColour2="var(--colour-icon-orange-background)" icon="verified_user">
                    <h4>Solid Warranty</h4>
                    <p>We offer 3 Months Warranty on General Repairs and 6 Months Extended Warranty on Battery Replacements. Please note that our warranty covers only the repaired part/service and <strong>does not cover liquid damage or new physical impact</strong> to the device after the repair.</p>
                </Section2ListItem>
            </div>
            
            <Section2Box />
        </section>
    )
}