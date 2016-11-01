import {Component} from 'angular2/core';
import {StarComponent} from '../shared/star.component';
import {RouteParams, Router} from 'angular2/router';
import {ProductService} from './product.service';
import {IProduct} from './product';
@Component({
    templateUrl: 'app/products/product-detail.component.html'
    , directives: [StarComponent]
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    products: IProduct[];
    product: IProduct;
    errorMessage: string;

    constructor(private _routeParams: RouteParams, private _router: Router, private _productService: ProductService) {
        console.log(this._routeParams.get('id'));
        let id = +this._routeParams.get('id'); // let is block scoped variable introduced in ES 2015        
        this.pageTitle += ` ${id}`;

    }
    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        if (!this.product) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getProduct(id);
        }
    }
    onBack(): void {
        this._router.navigate(['ProductListComponent']);
    }

    onHome(): void {
        this._router.navigate(['WelcomeComponent']);
    }
}