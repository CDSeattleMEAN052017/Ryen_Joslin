// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
//
// -Each vehicle should have a makeNoise method
// -Using the constructor, create a Bike
// -Redefine the Bike’s makeNoise method to print “ring ring!”
// -Create a Sedan
// -Redefine the Sedan’s makeNoise method to print "Honk Honk!”"
// -Using the constructor, create a Bus
// -Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, wheels, passengerNumber, speed) {
    if (!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name,wheels,passengerNumber, speed);
    }

    this.distanceTraveled = 0;

    var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ"
    this.speed = speed;
    this.name = name || "unicycle";
    this.wheels = wheels || 1;
    this.passengerNumber = passengerNumber || 0;
    this.vin = createVin();


    function createVin(){
        var vin = '';
        for (var i = 0; i < 17; i+=1 ){
            vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
    }
 }

 VehicleConstructor.prototype.makeNoise = function(noise){
     var noise = noise || "Honk Honk";
     console.log(noise);
     return this;
 };

 VehicleConstructor.prototype.move = function(){
     this.makeNoise();
     this.updateDistanceTraveled();
     return this;
 };

 VehicleConstructor.prototype.checkMiles = function(){
     console.log(this.distanceTraveled);
     return this;
 };

 VehicleConstructor.prototype.updateDistanceTraveled = function(){
     this.distanceTraveled += this.speed;
     console.log(this.distanceTraveled);
 }

var car = new VehicleConstructor('car',4, 4, 80);

var bus = new VehicleConstructor('bus', 8, 10, 45);

var chicken = new VehicleConstructor('chicken', 2, 4, 5);
