System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var VehicleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            //import {Observable} from 'rxjs/Observable'; // import just Observable from reactivex library
            VehicleService = (function () {
                function VehicleService(_http) {
                    this._http = _http;
                    this._vehicleUrl = '../api/vehicles/vehicles.json'; // json file
                }
                //getAvailableVehicleMangufacturers() : Vehicle[]{
                VehicleService.prototype.getAvailableVehicleMangufacturers = function () {
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
                        .map(function (response) { return response.json().vehicleJsonDataVar; })
                        .do(function (vehicleJsonDataVar) { return console.log(vehicleJsonDataVar); })
                        .toPromise()
                        .catch(this.handleError);
                };
                VehicleService.prototype.handleError = function (error) {
                    console.log(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error..');
                };
                VehicleService = __decorate([
                    // import all of reactivex.io library
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], VehicleService);
                return VehicleService;
            }());
            exports_1("VehicleService", VehicleService);
        }
    }
});
//# sourceMappingURL=vehicle.service.js.map