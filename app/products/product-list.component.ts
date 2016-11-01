import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';

@Component({
    //selector: 'pm-products'
    templateUrl: 'app/products/product-list.component.html'
    , styleUrls: ['app/products/product-list.component.css'] // comma separated css files could be given
    , pipes: [ProductFilterPipe]
    , directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    greyColor: string = 'grey';
    purpleColor: string = 'purple';
    bColor: string = '';
    
    imageWidth: number = 86;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilterString: string = '';
    products: IProduct[];
    errorMessage: string;
    homeUrl: string = 'http://localhost:3000';

    constructor(private _productService: ProductService, private _router: Router) {
        // its best practice to keep constructor free of logic and use component lifecycle hook method like ngOnInit which comes with the OnInit interface
    }
    ngOnInit(): void {
        this._productService.getProducts().subscribe( // In the component, subscribe to the observable and handle success and failure cases
              products => this.products = products
             ,error => this.errorMessage = <any>error);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(messageRcvd: string) {
        this.pageTitle = 'Product List' + messageRcvd;
        console.log('Product List message clicked..');
    }
    goHome(): void {
        console.log('Home button clicked..');
        this._router.navigate(['WelcomeComponent']);
    }
}