import React from "react";
import {Link} from 'react-router-dom';
import '../style/existcustomer.css'
export default function ExistingCustomer() {
  return <>
      <section class="bg-img">
  <nav class="navbar navbar-light shadow">
    <span class="navbar-brand mb-0 h1 text-white">DMS</span>
    <div class="form-inline">
      <button class="btn btn-danger my-2 my-sm-0">Back</button>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header bg-primary">
            <div class="d-flex justify-content-between">
              <span class="title">Exsiting Customer</span>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div class="card-body"> 
            <table class="table table-bordered table-hover">
              <thead class="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>data</td>
                  <td>data</td>
                  <td>
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">Left</button>
                      <button type="button" class="btn btn-primary">Middle</button>
                      <button type="button" class="btn btn-primary">Right</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>data</td>
                  <td>data</td>
                  <td>
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">Left</button>
                      <button type="button" class="btn btn-primary">Middle</button>
                      <button type="button" class="btn btn-primary">Right</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>data</td>
                  <td>data</td>
                  <td>
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">Left</button>
                      <button type="button" class="btn btn-primary">Middle</button>
                      <button type="button" class="btn btn-primary">Right</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> 
          </div>
        </div>
      </div>
    </div>   
  </div>
</section>
  </>;
}
