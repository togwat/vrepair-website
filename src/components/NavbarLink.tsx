import './css/NavbarLink.css'

export default function NavbarLink({ link, children }: { link: string; children: React.ReactNode }) {
    return (
        <a className="navbar-link" href={link}>
            {children}
        </a>
    )
}