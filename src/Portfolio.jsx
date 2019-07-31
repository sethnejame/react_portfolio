import React, { Component } from "react"
import axios from "axios"
import PortfolioCard from "./PortfolioCard"

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      portfolio: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/portfolio.json')
      .then(response => {
        this.setState({
          portfolio: response.data
        })
      })
  }

  render() {
    const portfolio = this.state.portfolio
    let portfolioList 

    if (portfolio.length > 0) {
      portfolioList = portfolio.map(item => {
        return (
          <div key={item.id} className="min-h-300 my-1 px-1 w-full">
            <PortfolioCard item={item} />
          </div>
        )
      })
    }


    return (
      <div className="content-wrapper" style={{ padding: '20px'}}>
        <div className="flex mb-4">
          <div className="w-3/4">
            <h1 style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}}>Portfolio</h1>
          </div>
        </div>
        <div className="w-full">
          {portfolioList}
        </div>
      </div>
    )
  }
};

export default Portfolio