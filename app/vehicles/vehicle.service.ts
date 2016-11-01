import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Vehicle } from '../vehicles/vehicle';
import {Observable} from 'rxjs/Rx'; // import all of reactivex.io library
//import {Observable} from 'rxjs/Observable'; // import just Observable from reactivex library

@Injectable()
//export class VehicleService {
export class VehicleService {
    private _vehicleUrl = '../api/vehicles/vehicles.json';// json file

    constructor(private _http: Http) { }

    //getAvailableVehicleMangufacturers() : Vehicle[]{
    getAvailableVehicleMangufacturers() {
        // Sevice returns the Observable and whoever subscribes to it will get the latest data
        //getAvailableVehicleMangufacturers(): Observable<Vehicle[]> { 
        // return [
        //  new Vehicle(1,'Audi')
        // ,new Vehicle(2,'BMW')
        // ,new Vehicle(3,'Cadillac')
        // ,new Vehicle(4,'Dodge')
        // ,new Vehicle(5,'Eodge')
        // ,new Vehicle(6,'Ford')       
        // ];
        return this._http.get(this._vehicleUrl)
            .map((response: Response) => response.json().vehicleJsonDataVar)            
            .do(vehicleJsonDataVar => console.log(vehicleJsonDataVar))
            .toPromise()
            .catch(this.handleError)
    }
    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error..');
    }
}