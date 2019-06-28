import React from "react"


const Main = () => {
    return (
        <div>
            
                <div className="hover:bg-teal w-screen h-24" style={{transition: 'background-color .5s linear'}}>
                    <h1 className="text-5xl font-black font-sans tracking-normal py-4 pl-24">portfolio</h1>
                </div>

                <div className="hover:bg-pink w-screen h-24" style={{ transition: 'background-color .5s linear'}}>
                    <h1 className="text-5xl font-black font-sans tracking-normal py-4 pl-24" >resume</h1>
                </div>

                <div className="hover:bg-yellow w-screen h-24" style={{transition: 'background-color .5s linear'}}>
                    <h1 className="text-5xl font-black font-sans tracking-normal py-4 pl-24">contact</h1>
                </div>
        
          
        </div>
    )
}


export default Main