import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'breadcrumb-component',
    template: `<div class="container row" style="margin-top:10px;">
    <ol class="breadcrumb">
        <li><a href="#"><i class="glyphicon glyphicon-home"></i></a></li>
        <li *ngFor="let c of crumbName; let last = last;"><a href="#" [ngClass]="{'last-item': last}">{{c}} </a></li>
    </ol>
    </div>`,
    styleUrls: ['../common/css/ecomStyles.css']
})

export class BreadcrumbComponent  {
    @Input("activeCrumb") crumbName = [];
}