import React from "react"
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
        return (
                <nav className="header">
                        <ul className="list-reset flex">
                                <li className="mr-6"><NavLink className="text-black hover:text-grey no-underline" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}} to='/'>main</NavLink></li>
                                <li className="mr-6"><NavLink className="text-black hover:text-teal no-underline" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}} to='/portfolio'>portfolio</NavLink></li>
                                <li className="mr-6"><NavLink className="text-black hover:text-pink no-underline" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}} to='/resume'>resume</NavLink></li>
                                <li className="mr-6"><a className="text-black hover:text-yellow no-underline" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}} href="mailto:sethnejame@gmail.com">contact</a></li>
                        </ul>
                        <h1 className="header-title">
                          <a target="_blank" className="text-black hover:text-grey no-underline" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}} href='https://www.linkedin.com/in/seth-nejame-b02039183'>seth.nejame</a>
                        </h1>
                </nav>
        )
}

export default Header