System.register(['angular2/core', '../vehicles/vehicle.service'], function(exports_1, context_1) {
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
    var core_1, vehicle_service_1;
    var Angular2TutorialComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vehicle_service_1_1) {
                vehicle_service_1 = vehicle_service_1_1;
            }],
        execute: function() {
            Angular2TutorialComponent = (function () {
                // inject VehicleService using constructor dependency injection
                function Angular2TutorialComponent(_vehicleService) {
                    this._vehicleService = _vehicleService;
                    this.showVehicles = false;
                    this.isSelected = true;
                    // Angular just retrieves the registered services (which we do in root app component) from Injector.
                }
                //createVehicles(): Vehicle[] {
                Angular2TutorialComponent.prototype.ngOnInt = function () {
                    this.getVehicles();
                };
                //getVehicles(): Vehicle[] {
                //getVehicles() : Observable<Vehicle[]>{
                Angular2TutorialComponent.prototype.getVehicles = function () {
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
                    this.vehicles = this._vehicleService.getAvailableVehicleMangufacturers();
                    this.showVehicles = !this.showVehicles;
                    return this.vehicles;
                };
                Angular2TutorialComponent = __decorate([
                    // import just Observable from reactivex library
                    core_1.Component({
                        templateUrl: '../app/angular2-tutorial/angular2.tutorial.component.html'
                    }), 
                    __metadata('design:paramtypes', [vehicle_service_1.VehicleService])
                ], Angular2TutorialComponent);
                return Angular2TutorialComponent;
            }());
            exports_1("Angular2TutorialComponent", Angular2TutorialComponent);
        }
    }
});
//# sourceMappingURL=angular2.tutorial.component.js.map