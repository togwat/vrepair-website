import Logo from "./Logo";
import NavbarCall from "./NavbarCall";
import NavbarLink from "./NavbarLink";
import NavbarMenu from "./NavbarMenu";
import './css/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Logo />
            <div className="navbar-links">
                <NavbarLink link="#services">Services</NavbarLink>
                <NavbarLink link="#todo">Pricing</NavbarLink>
                <NavbarLink link="#todo">About</NavbarLink>
                <NavbarCall />
            </div>
            <NavbarMenu />
        </nav>
    )
}