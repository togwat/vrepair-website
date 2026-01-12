import './css/HeroButton.css'

export default function HeroButton({ link, children }: { link: string; children: React.ReactNode }) {
    return (
        <a className="hero-button transition-default" href={link}>
            {children}
        </a>
    )
}