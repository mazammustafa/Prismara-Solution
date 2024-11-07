import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li className="nav-itmes"><NavLink></NavLink>Home</li>
                    <li className="nav-itmes"><NavLink></NavLink>About Us</li>
                    <li className="nav-itmes"><NavLink></NavLink>Services</li>
                    <li className="nav-itmes"><NavLink></NavLink>Gallery</li>
                    <li className="nav-itmes"><NavLink></NavLink>Industries Served</li>
                    <li className="nav-itmes"><NavLink></NavLink>Careers</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
