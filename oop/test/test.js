// console.log('I am running from node');
//
// console.log('WTF');
//
// var myarr = [1,5,25,125,42];
//
// for (var index in myarr){
//     console.log(myarr[index]*5);
// }
//
// for (var i = 0; i < myarr.length; i ++){
//     console.log(myarr[i]*5);
//     console.log("the right ways");
// }
//
// var myObject = {
//     language: "Javascript",
//     dojo: "Washington DC",
//     favorite_instructor: "None!"
// }
//
//
// Object.keys(myobject).forEach(function(key,value){
//     console.log(key, value, myobject[key]);
// })
//
// for (var key in myobject){
//     console.log(key, myobject[key] + " the value");
// }

// var hello;
// console.log('hello world');
// hello = 'Whee!';
// var jello = 'jiggly';
// function greeting(){
//     console.log("I will be hoisted");
// }

// var my_first_variable;
// my_first_variable = 'Data';
// console.log(my_first_variable);
//
// var myunknown = 'hello';
// console.log(typeof(myunknown));
//
// console.log(a);
// var a = 'weird';
// console.log(typeof(b));
// var b = 'weird too';
// console.log(typeof(b));
//
// var arr = [3, 6];
// arr[234] = "hi";
//
// console.log( arr.length );
// console.log( arr[34] );
// arr.length = 3;
// console.log( arr[34] );
// console.log( arr[234] );
// console.log( arr.length );
// arr.length = 500;
// console.log( arr[234] );
// console.log( arr.length );
//
// function countDown(number){
//     while(number > 0){
//         console.log(number);
//         number --;
//     }
// }
// countDown(10);

// var array = [4,1,6,9,44];
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// var ninja = {
//   name:'Susanna',
//   MEAN_belt:10,
//   iOS_belt:10,
//   python_belt:10,
//   php_belt:9, // she hadn't mastered deploying yet!
//   ruby_belt:9.75 // done in 1.5 hrs though!
// }
// for (var key in ninja) {
//   if (ninja.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(ninja[key]);
//   }
// }
// var dojo = {};                                 // creates an empty object
// dojo = {
//   name: 'Coding Dojo',                         // property can store a string
//   number_of_students: 25,                      // property can store a number
//   instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
//   location: {                                  // property can even store another object!
//     city: 'San Jose',
//     state: 'CA',
//     zipcode: 95112
//   }
// }                                              // access object properties with dot (.) notation
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
// console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
// dojo.number_of_students = 40;                  // we can reassign any of the properties
// dojo.location.city = "Bellevue";
// dojo.location.state = "Washington";
// dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
// dojo.phone_number = 1234567890 ;

// function mults(firstParameter, secondParameter){
//     var myProduct = firstParameter * secondParameter;
//     //var theProductOfFiveAndFourteen = mults(5,14);
//     //return mults;
// }
// //var theProductOfFiveAndFourteen = mults(5,14);
// console.log(mults(5,14));
//
//
function mult(firstParameter, secondParameter){
  var myProduct = firstParameter * secondParameter;
  return myProduct;
}
//console.log(mult(5,14));
console.log(mult(5,14));

console.log(mult(3456,345));

console.log(mult(34,302598));

var theProductOfFiveAndFourteen = mult(8,4);

console.log(theProductOfFiveAndFourteen);
