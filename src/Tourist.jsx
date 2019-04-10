import React, { Component } from "react";
import './css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from './img/clouds-daylight-environment-2082949.jpg'
import img2 from './img/adult-adventure-backpack-999068.jpg'
import img3 from './img/wildlife.jpg'
import img4 from './img/adventure.jpg'
import img5 from './img/cultural.jpg'
 
class Tourist extends Component {
  render() {
    return (
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 crsl" src={img1} alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 crsl" src={img2} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 crsl" src="..." alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <br/><br/>
<div className="container">
        <h3>Some top trending packages</h3>
        <br/>

    <div class="card-group">
  <div class="card">
    <img class="card-img-top" src={img3} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Package 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={img4} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Package 2</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={img5} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Package 3</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

</div>

    );
  }
}
 
export default Tourist;