import { ABOUT_ROUTE, BOOKING_ROUTE, HOME_ROUTE } from "../constants/Paths";
import Logo from "./Logo";
import NavbarCall from "./NavbarCall";
import NavbarLink from "./NavbarLink";
import NavbarMenu from "./NavbarMenu";
import './css/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href={HOME_ROUTE}><Logo /></a>
            <div className="navbar-links">
                <NavbarLink link="/#services">Services</NavbarLink>
                <NavbarLink link={BOOKING_ROUTE}>Booking</NavbarLink>
                <NavbarLink link={ABOUT_ROUTE}>About</NavbarLink>
                <NavbarCall />
            </div>
            <NavbarMenu />
        </nav>
    )
}