function VehicleConstructor(name, wheelCount, capacity){
    var vehicle = {};

    vehicle.name = name;
    vehicle.wheelCount = wheelCount;
    vehicle.capacity = capacity;

    vehicle.deets = function() {
        console.log("This rig is a " + vehicle.name + ". It has " + vehicle.wheelCount + " wheels. " + vehicle.capacity + " is how many it will seat. " +  vehicle.name_noise + " is the sound it makes. ");
    }

    return vehicle;
}
var bike = VehicleConstructor("bike", 2, 1);
bike.name_noise = "Ring ring"
bike.deets()

var sedan = VehicleConstructor("sedan", 4, 5);
sedan.name_noise = "Honk honk"
sedan.deets()

var bus = VehicleConstructor("bus", 10, 50);
bus.name_noise = "Beep beep!"
bus.addCapacity = function(new_passengers){
    bus.capacity += capacity
}
console.log(bus.name);
console.log(bus.wheelCount);
console.log(bus.capacity);
bus.new_passengers(5);
console.log(bus.capacity);

// var Bus = VehicleConstructor("bus", 4, 5);
// Bus.addPassengers = function(new_passengers){
//     Bus.num_passengers += new_passengers
// }
// console.log(Bus.name);
// console.log(Bus.num_wheels);
// console.log(Bus.num_passengers);
// Bus.addPassengers(10);
// console.log(Bus.num_passengers);


//
//
// function NinjaConstructor(name, age, prevOccupation){
//     var ninja = {};
//
//     ninja.name = name;
//     ninja.age = age;
//     ninja.prevOccupation = prevOccupation;
//
//     ninja.introduce = function() {
//         console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
//     }
//
//     return ninja;
// }
//
// var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
// Andrew.introduce();
//
// var Micheal = NinjaConstructor("Micheal", 34, "Founder");
//
// Micheal.introduce = function() {
//     console.log("I am the Sensei!")
// }
// Micheal.introduce();
