import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import img1 from './img/ella.jpg'

export default class Form extends Component{

    render(){
        return(
            
            <div className="container" align="center">
            <br/><br/> 
            <label> Name :&nbsp;&nbsp;&nbsp;</label> 
            <input type="text" placeholder='Enter your name'></input><br/><br/>
            <label>Email :&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='Enter your email'/><br/><br/>
            <label>country :&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='Enter you country'></input><br/><br/>
            <lable>Arrival date : &nbsp;&nbsp;&nbsp;</lable>
            <input type="date"></input><br/><br/>
            <label>Departure date   :&nbsp;&nbsp;&nbsp;</label>
            <input type="date" placeholder='Enter your name'></input><br/><br/>
            <label>Number of adults   :&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder=''/><br/><br/>
            <label>Number of children :</label>
            <input type="text" placeholder=''/><br/><br/>
            <lable>Anything else you want to specify :&nbsp;&nbsp;&nbsp;</lable><br/>
            <textarea></textarea><br/><br/>
            <button className="btn btn-success">Submit</button>
            </div>
            
        );
    }

}