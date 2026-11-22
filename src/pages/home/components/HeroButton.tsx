import './css/HeroButton.css'

interface HeroButtonProps {
    link: string;
    children: React.ReactNode;
}

export default function HeroButton({ link, children }: HeroButtonProps) {
    return (
        <a className="hero-button transition-default" href={link}>
            {children}
        </a>
    )
}