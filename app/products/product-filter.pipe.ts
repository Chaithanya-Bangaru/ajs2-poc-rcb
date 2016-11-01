import {PipeTransform, Pipe} from 'angular2/core';
import {IProduct} from './product';
//import {Pipe} from 'angular2/core';

@Pipe({
    name: 'productFilter'    
})

export class ProductFilterPipe implements PipeTransform{

    transform(value : IProduct, args: string[] ) : IProduct{
       let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
            // returns the transformed value
        return filter ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }

}