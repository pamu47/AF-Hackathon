import React, {Component} from 'react';
import './css/bootstrap.css';
import img1 from './img/RoamCeylon.png';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Tourist from "./Tourist";
  import Home from "./NavComponent";
  import Form from "./Form"
  import Bidding from './Bidding-portal'
  import BidList from './Bid-list'
  import Guide from './Guide'

export default class NavComponent extends Component{

    render(){
        return(
            <HashRouter>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href=""><img src={img1} width={150}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="">Home <span class="sr-only">(current)<li><NavLink to="/"></NavLink></li></span></a>
                        <li class="nav-item nav-link"><NavLink to="/tourist">Are you a tourist?</NavLink></li>
                        <li class="nav-item nav-link"><NavLink to="/guide">Looking for a guide?</NavLink></li>
                        <li class="nav-item nav-link"><NavLink to="/form">Tailor made tours</NavLink></li>
                        <li class="nav-item nav-link"><NavLink to="/bid">Bidding portal</NavLink></li>
                        <li class="nav-item nav-link"><NavLink to="/bidlist">Bid list</NavLink></li>
                        
                    </div>
                </div>
            </nav>
            <Route path="/" component={Home}/>
            <Route path="/tourist" component={Tourist}/>
            <Route path="/form" component={Form}/>
            <Route path="/bid" component={Bidding}/>
            <Route path="/bidlist" component={BidList}/>
            <Route path="/guide" component={Guide}/>
            </HashRouter>
        )
    }

}
