import './css/Section3ListItem.css'

export default function Section3ListItem ({ icon, children }: { icon?: React.ReactNode; children?: React.ReactNode }) {
    return (
        <div className="section3-list-item">
            <div className="section3-list-item-icon">
                <span className="material-symbols-outlined">{icon}</span>
            </div>

            <div className="section3-list-item-content">
                {children}
            </div>
        </div>
    )
}