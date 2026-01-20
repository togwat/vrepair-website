import Logo from "./Logo";
import NavbarCall from "./NavbarCall";
import NavbarLink from "./NavbarLink";
import NavbarMenu from "./NavbarMenu";
import './css/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/"><Logo /></a>
            <div className="navbar-links">
                <NavbarLink link="/#services">Services</NavbarLink>
                <NavbarLink link="/booking">Booking</NavbarLink>
                <NavbarLink link="/about">About</NavbarLink>
                <NavbarCall />
            </div>
            <NavbarMenu />
        </nav>
    )
}