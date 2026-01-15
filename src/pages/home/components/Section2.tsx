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

                <Section2ListItem accentColour1="var(--colour-icon-blue)" accentColour2="var(--colour-icon-blue-background)" icon="receipt_long">                    
                    <h4>Free Quote Policy</h4>
                    <p>Free quotes</p>
                </Section2ListItem>

                <Section2ListItem accentColour1="var(--colour-icon-orange)" accentColour2="var(--colour-icon-orange-background)" icon="verified_user">
                    <h4>Solid Warranty</h4>
                    <p>6 month warranty</p>
                </Section2ListItem>
            </div>
            
            <Section2Box />
        </section>
    )
}