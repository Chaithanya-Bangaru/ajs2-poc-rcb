import {Component} from 'angular2/core';
import {Vehicle} from '../vehicles/vehicle';
import {VehicleService} from '../vehicles/vehicle.service';
import {Observable} from 'rxjs/Observable'; // import just Observable from reactivex library

@Component({
    templateUrl: '../app/angular2-tutorial/angular2.tutorial.component.html'
    //,providers : [VehicleService] // This is service registration with the angular injector but we commented it 
    // because we actually registered with the root component app.component.ts so it is available to all other component classes

})
export class Angular2TutorialComponent {

    // inject VehicleService using constructor dependency injection
    constructor(public _vehicleService: VehicleService) {
        // Angular just retrieves the registered services (which we do in root app component) from Injector.
    }
    // vehicle1: Vehicle;
    // vehicle2: Vehicle;
    // vehicle3: Vehicle;
    //vehicles: Vehicle[];
    //vehicles: Observable<Vehicle[]>;
    vehicles: Promise<Vehicle[]>;
    errorMessage: string;

    showVehicles: boolean = false;
    //createVehicles(): Vehicle[] {

    ngOnInt() {
        this.getVehicles();
    }
    //getVehicles(): Vehicle[] {
    //getVehicles() : Observable<Vehicle[]>{
    getVehicles(): Promise<Vehicle[]> {
        //   this.vehicle1 =  new Vehicle(1,"Mazda3");
        //   this.vehicle2 =  new Vehicle(2,'Tesla Model 3');          
        //   this.vehicle3 =  new Vehicle(3,'Audi ABC');
        //return this.vehicles = [this.vehicle1,this.vehicle2,this.vehicle3];
        //Removing above hard coded vehicles and fetch them using a service
        //this.vehicles = 
        // this._vehicleService.getAvailableVehicleMangufacturers()
        //     .subscribe(vehicles => this.vehicles = vehicles
        //                 , error => this.errorMessage = <any>error
        //                 // in the subscription, we get vehicles and we assign to local var
        //                 // if any error we catch the error message and assign to local var
        //     );
        //return this._vehicleService.getAvailableVehicleMangufacturers();
        this.vehicles = this._vehicleService.getAvailableVehicleMangufacturers()
        this.showVehicles = !this.showVehicles;
        return this.vehicles;
    }
    isSelected: boolean = true;
}