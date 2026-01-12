import NavbarLink from "./NavbarLink";
import './css/NavbarCall.css'

export default function NavbarCall() {
    return (
        <div className="navbar-call">
            <NavbarLink link="todo">
                <span className="material-symbols-outlined">phone</span>
                09-4880666
            </NavbarLink>
        </div>
    )
}