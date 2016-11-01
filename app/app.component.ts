import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import '/rxjs/Rx'; // react extensions lib for map operator and other features
import {WelcomeComponent} from '../app/home/welcome.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ContactComponent} from '../app/home/contact.component';

import {Angular2TutorialComponent} from '../app/angular2-tutorial/angular2.tutorial.component';
import {Angular1Versus2Component} from '../app/angular2-tutorial/angular1Versus2.component';

// Services
import {ProductService} from './products/product.service';
import {VehicleService} from '../app/vehicles/vehicle.service';
// Router config
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES,Router,RouteConfig} from 'angular2/router';

@Component({
    selector: 'raja-angular2-app',
    // template: `
    // <div align="center">
    //     <h1>{{ pageTitle }}</h1>
    //     <div>
    //        <h3> First angular2 app</h3>
    //     </div>
    //  </div>
    //  `
    //templateUrl: 'app/products/product-list.component.html'
    //<pm-products></pm-products>
    template: `

  <div>
   <nav class='navbar navbar-default' >
    <div class='container-fluid' >        
        <ul class='nav navbar-nav' >
        <li><img src="./app/assets/images/Angularjs-large.png" style="max-height:70px;padding-bottom:30px"/></li>             
            <li><a [routerLink]="['WelcomeComponent']">Home</a></li>
            <li><a [routerLink]="['ProductListComponent']">Product List</a></li>
            <li><a [routerLink]="['ContactComponent']">Contact Me</a></li>            
            <li><a [routerLink]="['Angular1Versus2Component']">Angular 1 vs 2</a></li>
            <li><a [routerLink]="['Angular2TutorialComponent']">Angular2 Tutorial</a></li>  
        </ul>
    </div>
   </nav>
   
   <div class='container'>
        <router-outlet></router-outlet>
   </div>

  </div>
    `
    //,directives: [ProductListComponent, ROUTER_DIRECTIVES]
    , directives: [ROUTER_DIRECTIVES]
    , providers: [ProductService, VehicleService, HTTP_PROVIDERS, ROUTER_PROVIDERS] // This is services registration with the angular injector 
    //, providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS] 

})
@RouteConfig([
    { path: '/welcome', name: 'WelcomeComponent', component: WelcomeComponent, useAsDefault: true } // note the name in Pascal case
    , { path: '/products', name: 'ProductListComponent', component: ProductListComponent }
    , { path: '/contact', name: 'ContactComponent', component: ContactComponent }
    , { path: '/product/:id', name: 'ProductDetailComponent', component: ProductDetailComponent }
    , { path: '/angular2/', name: 'Angular2TutorialComponent', component: Angular2TutorialComponent }
    , { path: '/angular1Versus2/', name: 'Angular1Versus2Component', component: Angular1Versus2Component }
])
export class AppComponent {
    constructor(private _router: Router) {
    }
    pageTitle: string = 'Manage Shopping Products';

}
