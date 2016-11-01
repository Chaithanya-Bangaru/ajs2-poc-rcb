import { bootstrap }    from 'angular2/platform/browser';
//import {ProductService} from './products/product.service';
//import {VehicleService} from '../app/vehicles/vehicle.service';

// Our main component
import { AppComponent } from './app.component';
//Services can also be registered in the bootstrapping class like below as a 2nd param which is an array for taking services
//bootstrap(AppComponent,[ProductService,VehicleService]);
bootstrap(AppComponent);
