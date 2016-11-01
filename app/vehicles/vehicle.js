System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Vehicle;
    return {
        setters:[],
        execute: function() {
            Vehicle = (function () {
                function Vehicle(id, name) {
                    this.vehicleId = id;
                    this.vehicleName = name;
                }
                return Vehicle;
            }());
            exports_1("Vehicle", Vehicle);
        }
    }
});
//# sourceMappingURL=vehicle.js.map