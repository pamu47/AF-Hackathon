import React, {Component} from 'react';
import './css/bootstrap.css';

export default class Bidding extends Component{

    render(){
        return(
            <div class="container">
            <br/>
                <h2>Bidding portal</h2>

                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">bid no.</th>
      <th scope="col">Customer name</th>
      <th scope="col">Requested package</th>
      <th scope="col">Bid</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>test_package 1</td>
      <td>200$</td>
      <td><button class="btn btn-success">Accept</button>&nbsp;&nbsp;&nbsp;
      <button class="btn btn-danger">Decline</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>test_package 2</td>
      <td>300$</td>
      <td><button class="btn btn-success">Accept</button>&nbsp;&nbsp;&nbsp;
      <button class="btn btn-danger">Decline</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>test_package 3</td>
      <td>250$</td>
      <td><button class="btn btn-success">Accept</button>&nbsp;&nbsp;&nbsp;
      <button class="btn btn-danger">Decline</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>test_package 4</td>
      <td>250$</td>
      <td><button class="btn btn-success">Accept</button>&nbsp;&nbsp;&nbsp;
      <button class="btn btn-danger">Decline</button></td>
    </tr>
  </tbody>
</table>
            </div>

        )
    }

}
