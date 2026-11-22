import NavbarLink from "./NavbarLink";
import './css/NavbarCall.css'

export default function NavbarCall() {
    return (
        <div className="navbar-call">
            <NavbarLink link="tel:09-4880666">
                <span className="material-symbols-outlined" aria-hidden="true">phone</span>
                09-4880666
            </NavbarLink>
        </div>
    )
}