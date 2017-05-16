// Have the Vehicle constructor also take in a “speed” Store the speed as an attribute Create a private variable called distance_travelled that starts at 0 Create a private method called updateDistanceTravelled that increments distance traveled by speed Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name, wheels, passengers){this
    var vehicle = {};

    this.name = name || "unicycle";
    this.wheels = wheels || 1;
    this.passengers = passengers || 0;

    //noise method
    vehicle.makeNoise = function(){
        console.log("Making noise!");
    }

    return vehicle;
}
var unicycle = new VehicleConstructor();


var Bike = new VehicleConstructor("Bike", 2, 1);
Bike.makeNoise();
Bike.makeNoise = function(){
    console.log("Ring ring")
}
Bike.makeNoise();

var Sedan = new VehicleConstructor("Sedan", 4, 4);
Sedan.makeNoise = function(){
    console.log("Honk honk!");
}

var Bus = new VehicleConstructor("Bus", 8, 1);
Bus.pickUpPassengers = function(passengers){
    Bus.passengers += passengers;
}
console.log(Bus.passengers)
Bus.pickUpPassengers(5);
console.log(Bus.passengers)
