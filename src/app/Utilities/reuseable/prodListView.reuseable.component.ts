import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prod-list',
  template: `<div class="row">
  <div *ngFor="let i of prodData" class="col-md-3 col-sm-6" style="margin-top: 20px;">
      <div class="product-grid8">
          <div class="product-image8">
              <a href="#">
                  <img class="pic-1" [src]="i.prodUrl[0]">
                  <img class="pic-2" [src]="i.prodUrl[1]">
              </a>
              <ul class="social">
                  <li><a href="" class="fa fa-search"></a></li>
                  <li><a href="" class="fa fa-shopping-bag"></a></li>
                  <li><a href="" class="fa fa-shopping-cart"></a></li>
              </ul>
              <span class="product-discount-label">-{{i.prodDiscount}}%</span>
          </div>
          <div class="product-content">
              <div class="price">&#8377; {{i.prodPrice}}
                  <span>&#8377; {{ (i.prodPrice/i.prodDiscount) }}</span>
              </div>
              <span class="product-shipping">Free Shipping</span>
              <h3 class="title"><a href="#">{{i.prodName}}</a></h3>
              <a class="all-deals" href="">See all deals <i class="fa fa-angle-right icon"></i></a>
          </div>
      </div>
  </div>
</div>`,
styleUrls: ['../common/css/ecomStyles.css']
})


export class ProdListViewTemplateComponent {
 @Input("prodListArr") prodData = [];
}