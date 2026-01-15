import './css/Section2ListItem.css'

export default function Section2ListItem ({ accentColour1, accentColour2, icon, children }: { accentColour1?: string; accentColour2?: string; icon?: React.ReactNode; children?: React.ReactNode }) {
    return (
        <div className="section2-list-item" style={{ "--icon-accent-1": accentColour1, "--icon-accent-2": accentColour2 } as React.CSSProperties}>
            <div className="section2-list-item-icon">
                <span className="material-symbols-outlined">{icon}</span>
            </div>

            <div className="section2-list-item-content">
                {children}
            </div>
        </div>
    )
}