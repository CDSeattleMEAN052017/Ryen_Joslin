// function NinjaConstructor(name, age, prevOccupation) {
//     this.name = name;
//     this.prevOccupation = prevOccupation;
//     this.introduce = function() {
//         console.log("Hi my name is " + this.name + " . I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     }
// }
//
//     console.log(this)
//
//     var nikki = NinjaConstructor("Nikki", "Historian");
//     var Andrew = NinjaConstructor("Andrew", 34, "Teacher");
//     Andrew.introduce();
//
//     var Micheal = NinjaConstructor("Micheal", 24, "Fouder");
//
//     var Johnny = NinjaConstructor("Johnny", 24, "Fouder");
//     Johnny.introduce();
//
//     var Buttface = NinjaConstructor("Buttface", 24, "Fouder");
//     Buttface.introduce();
//
//     Buttface.introduce = function() {
//         console.log("I am a Buttface")
//     }
//
//     Micheal.introduce = function() {
//         console.log("I am the sensei")
//     }
//     Micheal.introduce();
//     Buttface.introduce();
// //   this.name = name;
// //   this.prevOccupation = prevOccupation;
// //   this.introduce = function() {
// //     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
// //   }
// // }
// // var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
// //
// // console.log(this)
// // //after var dylan ... add:
// // var nikki = NinjaConstructor('Nikki','Historian');
// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log("this is a private method");
//   }
//
//   // PUBLIC
//   privatemethod()
//       console.log("this is a public method")
//   }
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation;
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod(); // this works since it is a scope that can access privateMethod!
//     console.log(privateVar);      // this works too!
//   }
// }
// var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
// // try this:
// Pariece.private();
// // or this:
// //privateMethod();
// // or this:
// //Pariece.privateVar;
// // none of these work. Think about the scope of each.

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log(this); // What will print here?
  }
  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  // PUBLIC METHODS DECLARED HERE
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();
