import React from "react"

const ResumeCard = (props) => {
    let item = props.item
    return (

        <div key={item.id} className="overflow-wrap border rounded-lg hover:bg-grey-lighter w-full" style={{transition: 'background-color .5s linear'}}>
            <img src={item.image} style={{ height: '75px', width: '75px', margin: '20px', float: 'left'}} />


            <div className="px-6 py-4" style={{ minHeight: '150px', margin: 'auto'}} >
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <h4 className="pb-2 text-grey-darker">{item.title}</h4>
                <h6 className="pb-2 text-grey-dark" style={{fontStyle: 'italic'}}>{item.date}</h6>
                <p className="text-grey-darker text-base">
                    {item.description}
                </p>
            </div>

        </div>
    )
}

export default ResumeCard