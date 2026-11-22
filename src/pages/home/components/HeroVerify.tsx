import './css/HeroVerifiy.css'

export default function HeroVerify({ text }: { text?: string }) {
    return (
        <div className="hero-verify">
            <span className="material-symbols-outlined" aria-hidden="true">verified</span>
            <p>{text}</p>
        </div>
    )
}
