import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import './css/tailwind.css';
import { BrowserRouter } from 'react-router-dom'
import Main from "./Main"
import Resume from "./Resume"
import { Switch, Route } from 'react-router-dom'
import Portfolio from "./Portfolio";


const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Main}></Route>
                        <Route exact path='/portfolio' component={Portfolio}></Route>
                        <Route exact path='/resume' component={Resume}></Route>
                    </Switch>
                </div>
                <Footer />
            </div >
        </div >
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));