import React from "react"

const PortfolioCard = (props) => {
  let item = props.item
  return (

    <div key={item.id} className="overflow-wrap border rounded-lg hover:bg-grey-lighter w-full" style={{transition: 'background-color .5s linear'}}>
      <img src={item.image} style={{ height: '200px', width: '300px', margin: '20px' }} />
      <div className="px-6 py-4" style={{ minHeight: '150px', margin: 'auto'}} >
        <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-grey-darker text-base">
            {item.description}
          </p>
        <h5 className="pb-2 text-grey-darker">View here: <a href="{item.deployed}">{item.name}</a></h5>
      </div>
    </div>
  )
}

export default PortfolioCard