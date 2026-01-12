import Logo from "./Logo";
import NavbarCall from "./NavbarCall";
import NavbarLink from "./NavbarLink";
import './css/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Logo />
            <div className="navbar-links">
                <NavbarLink link="#todo" children="Services" />
                <NavbarLink link="#todo" children="Pricing" />
                <NavbarLink link="#todo" children="About" />
                <NavbarCall />
            </div>
        </nav>
    )
}