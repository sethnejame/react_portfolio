import React from "react"

const ResumeCard = (props) => {
    let item = props.item
    return (

        <div key={item.id} className="overflow-hidden border rounded-lg bg-grey-lighter">
            <img src={item.image} style={{ height: '75px', width: '75px', margin: '20px', float: 'left'}} />


            <div className="px-6 py-4" style={{ minHeight: '150px', width: '100%', margin: 'auto'}} >
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <h4 className="pb-2 text-grey-darker">{item.title}</h4>
                <p className="text-grey-darker text-base">
                    {item.description}
                </p>
            </div>

        </div>
    )
}

export default ResumeCard