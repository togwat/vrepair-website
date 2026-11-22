import './css/Section1Box.css'

interface Section1BoxProps {
    accentColour1?: string; 
    accentColour2?: string; 
    icon?: React.ReactNode; 
    children?: React.ReactNode;
}

export default function Section1Box({ accentColour1, accentColour2, icon, children }: Section1BoxProps) {
    return (
        <div className="section1-box transition-default" style={{ "--box-accent-1": accentColour1, "--box-accent-2": accentColour2 } as React.CSSProperties}>
            <div className="section1-box-icon transition-default">
                <span className="material-symbols-outlined">{icon}</span>
            </div>

            <div className="section1-box-content">
                {children}
            </div>
        </div>
    )
}