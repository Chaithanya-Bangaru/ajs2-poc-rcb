System.register(['angular2/core', 'angular2/http', '/rxjs/Rx', '../app/home/welcome.component', './products/product-list.component', './products/product-detail.component', '../app/home/contact.component', '../app/angular2-tutorial/angular2.tutorial.component', '../app/angular2-tutorial/angular1Versus2.component', './products/product.service', '../app/vehicles/vehicle.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, welcome_component_1, product_list_component_1, product_detail_component_1, contact_component_1, angular2_tutorial_component_1, angular1Versus2_component_1, product_service_1, vehicle_service_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (angular2_tutorial_component_1_1) {
                angular2_tutorial_component_1 = angular2_tutorial_component_1_1;
            },
            function (angular1Versus2_component_1_1) {
                angular1Versus2_component_1 = angular1Versus2_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (vehicle_service_1_1) {
                vehicle_service_1 = vehicle_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.pageTitle = 'Manage Shopping Products';
                }
                AppComponent = __decorate([
                    core_1.Component({
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
                        template: "\n\n  <div>\n   <nav class='navbar navbar-default' >\n    <div class='container-fluid' >        \n        <ul class='nav navbar-nav' >\n        <li><img src=\"./app/assets/images/Angularjs-large.png\" style=\"max-height:70px;padding-bottom:30px\"/></li>             \n            <li><a [routerLink]=\"['WelcomeComponent']\">Home</a></li>\n            <li><a [routerLink]=\"['ProductListComponent']\">Product List</a></li>\n            <li><a [routerLink]=\"['ContactComponent']\">Contact Me</a></li>            \n            <li><a [routerLink]=\"['Angular1Versus2Component']\">Angular 1 vs 2</a></li>\n            <li><a [routerLink]=\"['Angular2TutorialComponent']\">Angular2 Tutorial</a></li>  \n        </ul>\n    </div>\n   </nav>\n   \n   <div class='container'>\n        <router-outlet></router-outlet>\n   </div>\n\n  </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [product_service_1.ProductService, vehicle_service_1.VehicleService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS] // This is services registration with the angular injector 
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'WelcomeComponent', component: welcome_component_1.WelcomeComponent, useAsDefault: true } // note the name in Pascal case
                        ,
                        { path: '/products', name: 'ProductListComponent', component: product_list_component_1.ProductListComponent },
                        { path: '/contact', name: 'ContactComponent', component: contact_component_1.ContactComponent },
                        { path: '/product/:id', name: 'ProductDetailComponent', component: product_detail_component_1.ProductDetailComponent },
                        { path: '/angular2/', name: 'Angular2TutorialComponent', component: angular2_tutorial_component_1.Angular2TutorialComponent },
                        { path: '/angular1Versus2/', name: 'Angular1Versus2Component', component: angular1Versus2_component_1.Angular1Versus2Component }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map