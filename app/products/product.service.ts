import {Injectable} from 'angular2/core';
import {IProduct} from './product';
import {Http,Response} from 'angular2/http'; // http service
import {Observable} from 'rxjs/Observable'

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';// json file
    constructor(private _http : Http){ // constructor injection

    }
    //get products service method which contains http service call retuns the observable
    getProducts() : Observable<IProduct[]>{        
        let retJson = this._http.get(this._productUrl);
        //console.log ("retJson:"+retJson)  ;
        //console.log ("retJson:"+retJson.data())  ;
        return this._http.get(this._productUrl)
        .map((response:Response) => response.json())
        .do ( data => console.log ("All :" +JSON.stringify(data)  )  )
        .catch(this.handleError);        
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error:Response){
        console.error(error);     
        return Observable.throw(error.json().error || 'Server error..' );
    }

}