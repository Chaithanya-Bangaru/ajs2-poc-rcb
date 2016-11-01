import { Component } from 'angular2/core';
import {Router} from 'angular2/router';
import {ProductListComponent} from '../products/product-list.component';
@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    constructor(private _router: Router) {
    }

    public pageTitle: string = "Welcome";

    getProductList(): void {
        console.log('within goProductList method..');
        this._router.navigate(['ProductListComponent']);
    }
}
