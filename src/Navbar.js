import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/Articles'>Articles</Link>

            </li>
        </ul>
    </nav>
)

export default Navbar
