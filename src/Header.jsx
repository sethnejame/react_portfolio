import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
                <nav className="header">
                        <ul className="list-reset flex">
                                <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/main'>Main</NavLink></li>
                                <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/contact'>Contact Me</NavLink></li>
                                <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
                                <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/resume'>Resume</NavLink></li>
                        </ul>
                        <h1 className="header-title">
                                <Link className="text-black hover:text-grey no-underline" to='/'>seth.nejame</Link>
                        </h1>
                </nav>
        )
}

export default Header