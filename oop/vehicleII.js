function VehicleConstructor(name, wheels, passengerNumber){this
    var vehicle = {};

    this.name = name || "unicycle";
    this.wheels = wheels || 1;
    this.passengerNumber = passengerNumber || 0;

    this.makeNoise = function(noise){
        var noise = noise || "Honk honk";
        console.log(noise)
    }

    //return vehicle;
}

var unicycle = VehicleConstructor();

var bike = VehicleConstructor("bicycle", 2, 0);
bike.makeNoise = function(){
    console.log('ring, ring');
}
var sedan = VehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function(){
    console.log('Honk Honk');
}
var bus = VehicleConstructor('bus', 6, 0);
bus.pickUpPassengers = function(passengers) {
    this.passengerNumber += passengers;
}
console.log(bus.passengerNumber);
bus.pickUpPassengers(6);
console.log(bus.passengerNumber);
