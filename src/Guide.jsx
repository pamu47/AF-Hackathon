import React, {Component} from 'react';
import './css/bootstrap.css';
import './css/style.css';

export default class Guide extends Component{

    render(){
        return(
            <div class="container"><br/>
            <div class="list-group">
  <a href="" class="list-group-item list-group-item-action flex-column align-items-start ">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Donald Trump</h5>
      <small>3 days ago <br/><br/>
      <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
      </small>
    </div>
    <p class="mb-1">"Donald was a wonderful and very informed guide. He is one of the best guides we have used in our years of traveling. When we return to Sri Lanka on another trip we will definitely hire him again for another very informative, educational and fun afternoon. Definitely a 5 star ++ guide</p>
    <small>Anna from Italy"</small>
  </a>
  <a href="" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Andrea</h5>
      <small class="text-muted">5 days ago<br/><br/>
      <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
    </small>
    </div>
    <p class="mb-1">"We had an AMAZING time with you and appreciate all of your insight, patience and captivating stories!!"</p>
    <small class="text-muted">Raja from hambanthota.</small>
  </a>
  <a href="" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Louvre</h5>
      <small class="text-muted">8 days ago
      <br/><br/>
      <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
      </small>
    </div>
    <p class="mb-1">"Thank you for a wonderful tour of the Louvre! We really enjoyed meeting you and hearing your fascinating perspective on all things French. 
    You made the Louvre come alive in special way for Corinne as a first-time visitor, and you proved the old axiom that less is really more when it comes to a massive collection of art. "</p>
    <small class="text-muted">Sira from Polonnaru
    </small>
  </a>
</div>

            </div>

        )
    }

}
