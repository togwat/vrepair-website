import { fallDown as Menu } from 'react-burger-menu'
import NavbarLink from './NavbarLink'

export default function NavbarMenu() {
    return (
        <div className="navbar-menu">
            <Menu right>
                <NavbarLink link="#todo">Services</NavbarLink>
                <NavbarLink link="#todo">Pricing</NavbarLink>
                <NavbarLink link="#todo">About</NavbarLink>
            </Menu>
        </div>     
    )
}