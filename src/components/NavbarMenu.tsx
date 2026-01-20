import { fallDown as Menu } from 'react-burger-menu'
import NavbarLink from './NavbarLink'
import { useState } from 'react'

export default function NavbarMenu() {
    const [isOpen, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)

        // prevent scrolling main page
        document.body.style.overflow = 'hidden'
    }

    function handleClose() {
        setOpen(false)

        // re-enable scrolling
        document.body.style.overflow = ''
    }

    return (
        <div className="navbar-menu">
            <Menu right onOpen={handleOpen} onClose={handleClose} isOpen={isOpen}>
                <NavbarLink link="/#services" onClick={handleClose}>Services</NavbarLink>
                <NavbarLink link="/booking">Booking</NavbarLink>
                <NavbarLink link="/about">About</NavbarLink>
            </Menu>
        </div>     
    )
}