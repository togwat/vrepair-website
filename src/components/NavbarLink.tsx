import './css/NavbarLink.css'
import type { MouseEventHandler } from 'react';

export default function NavbarLink({ link, children, onClick }: { link: string; children: React.ReactNode; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
    return (
        <a className="navbar-link transition-default" href={link} onClick={onClick}>
            {children}
        </a>
    )
}