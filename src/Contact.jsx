import React from "react"
import { UndrawDarkAlley } from 'react-undraw-illustrations' 

const Contact = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap m-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawDarkAlley primaryColor='maroon' height='200px' />
                </div>
            
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">Contact Me</h1>
                    <p className="content-text">Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                </div>
        
            </div>
        </div>
    )
}

export default Contact