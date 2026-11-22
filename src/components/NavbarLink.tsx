import './css/NavbarLink.css'
import type { MouseEventHandler } from 'react';

interface NavbarLinkProps {
    link: string;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavbarLink({ link, children, onClick }: NavbarLinkProps) {
    return (
        <a className="navbar-link transition-default" href={link} onClick={onClick}>
            {children}
        </a>
    )
}