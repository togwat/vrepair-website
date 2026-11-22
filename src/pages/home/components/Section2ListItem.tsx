import './css/Section2ListItem.css'

interface Section2ListItemProps { 
    accentColour1?: string;
    accentColour2?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function Section2ListItem ({ accentColour1, accentColour2, icon, children }: Section2ListItemProps) {
    return (
        <div className="section2-list-item" style={{ "--icon-accent-1": accentColour1, "--icon-accent-2": accentColour2 } as React.CSSProperties}>
            <div className="section2-list-item-icon">
                <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
            </div>

            <div className="section2-list-item-content">
                {children}
            </div>
        </div>
    )
}