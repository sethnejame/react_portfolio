import React from "react"
import { NavLink, Link } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            
                <div className="hover:bg-teal w-screen h-24" style={{transition: 'background-color .5s linear'}}>
                <Link className="no-underline text-black" to='/'><h1 className="text-5xl py-4 pl-24" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}}>portfolio</h1></ Link>
                </div>

                <div className="hover:bg-pink w-screen h-24" style={{ transition: 'background-color .5s linear'}}>
                <Link className="no-underline text-black" to='/resume'><h1 className="text-5xl py-4 pl-24" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}}>resume</h1></ Link>
                </div>

                <div className="hover:bg-yellow w-screen h-24" style={{transition: 'background-color .5s linear'}}>
                <a className="no-underline text-black" href="mailto:sethnejame@gmail.com"><h1 className="text-5xl py-4 pl-24" style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}}>contact</h1></a>
                </div>
        
          
        </div>
    )
}


export default Main