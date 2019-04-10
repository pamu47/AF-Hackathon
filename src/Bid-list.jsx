import React, {Component} from 'react';
import './css/bootstrap.css';
import img from './img/ella.jpg'
import img1 from './img/yala.jpg'
import img2 from './img/adventure.jpg'

export default class Bidlist extends Component{

    render(){
        return(
            <div class="container">
            <br/><br/>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center"><img src={img} width={120}/>Hiking
                    <span class="badge badge-primary badge-pill">14 bids left</span>
                    <button class="btn btn-info">Bid now</button>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center"><img src={img1} width={120}/>
                    Wild-life package
                    <span class="badge badge-primary badge-pill">2 bids left</span>
                    <button class="btn btn-info">Bid now</button>
                </li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><img src={img2} width={120}/>
                Camping package
                <span class="badge badge-primary badge-pill">1 bid left</span>
                <button class="btn btn-info">Bid now</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><img src={img} width={120}/>Hiking
                    <span class="badge badge-primary badge-pill">14 bids left</span>
                    <button class="btn btn-info">Bid now</button>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center"><img src={img1} width={120}/>
                    Wild-life package
                    <span class="badge badge-primary badge-pill">2 bids left</span>
                    <button class="btn btn-info">Bid now</button>
                </li>
</ul>
            </div>

        )
    }

}
