import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `<div> 
  <header id="first">
  <div class="header-content">
      <div class="inner">
          <h1 class="cursive">Welcome</h1>
          <h4>Only place to shop genuine products</h4>
          <hr>
          <a class="btn btn-primary btn-xl">Today's offers</a>
          <a class="btn btn-primary btn-xl page-scroll">Missed Offers</a>
      </div>
  </div>
</header>

<div class="jumbotron">
<div class="row w-100">
        <div class="col-md-3">
            <div class="card border-info mx-sm-1 p-3">
                <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-car" aria-hidden="true"></span></div>
                <div class="text-info text-center mt-3"><h4>Cars</h4></div>
                <div class="text-info text-center mt-2"><h1>234</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-success mx-sm-1 p-3">
                <div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-eye" aria-hidden="true"></span></div>
                <div class="text-success text-center mt-3"><h4>Eyes</h4></div>
                <div class="text-success text-center mt-2"><h1>9332</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-danger mx-sm-1 p-3">
                <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-heart" aria-hidden="true"></span></div>
                <div class="text-danger text-center mt-3"><h4>Hearts</h4></div>
                <div class="text-danger text-center mt-2"><h1>346</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-warning mx-sm-1 p-3">
                <div class="card border-warning shadow text-warning p-3 my-card" ><span class="fa fa-inbox" aria-hidden="true"></span></div>
                <div class="text-warning text-center mt-3"><h4>Inbox</h4></div>
                <div class="text-warning text-center mt-2"><h1>346</h1></div>
            </div>
        </div>
     </div>
</div>

  </div>`,
  styleUrls: ['homePage.styles.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}