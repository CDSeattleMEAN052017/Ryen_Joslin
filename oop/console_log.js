var Ryan = {
    name:"Ryan",
    sayName: function(){
        console.log("Ryan");

    }
}

Ryan.sayName();

function NewPerson(name){
    return {
        name:name,
        sayName: function(){
            console.log(name);
        }

    }
}

var Jay = NewPerson("Jay");
var Sara = NewPerson("Sara")
Jay.sayName();
Sara.sayName();

function Person(name) {
    console.log(this);
    this.name = name;
    this.sayName = function(){
        console.log(name);
    }
}

var Jimmy = new Person("Jimmy");
Jimmy.sayName();

// Overview: This function creates game objects, by returning a game object when invoked
function GameConstructor(consumerPrice,dealerCost,name, inStock){
  // private variables
  // dealerCost is private so a buyer can't see our ridiculous markup!
  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  // if you are returning an object, set it as the last private variable
  var ourGame = {}; // end of private properties
  // public properties
  //_ signifies a field that we shouldn't modify, but is public
  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];
  // public methods can affect private variables!
  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }//end of methods


  //private methods :
  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }
  //End private methods
    // run events prior to construction if necessary
  myPrivateFunction();
  // return your final object (We will learn about other strategies to construct objects soon!)
  return ourGame;
}

function GameConstructor(consumerPrice,dealerCost,name, inStock){


  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  var ourGame = {};


  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];


  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }


  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }


  myPrivateFunction();
  return ourGame;
}

function NinjaConstructor(name, age, prevOccupation){
    var ninja = {};

    ninja.name = name;
    ninja.age = age;
    ninja.prevOccupation = prevOccupation;

    ninja.introduce = function() {
        console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
    }

    return ninja;
}

var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();

var Micheal = NinjaConstructor("Micheal", 34, "Founder");

Micheal.introduce = function() {
    console.log("I am the Sensei!")
}
Micheal.introduce();
