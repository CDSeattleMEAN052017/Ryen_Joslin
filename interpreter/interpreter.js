// example
//  var hello = "interesting";
// function example() {
//   var hello = "hi!";
//   console.log(hello);
// }
// example();
// console.log(hello);
// answer
 //declarations get hoisted
// var hello;
// function example() {
//   var hello;
//   hello = "hi";
//   console.log(hello);
// }
// //assignments and invocation maintain order
// hello = "interesting";
// example();
// console.log(hello);

// 1 console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);
//
// a var first_variable;
// function firstFunc() {
//     var first_variable;
//     first_variable = "Yippee  I was first";
//     console.log(first_variable);
// }
// console.log(first_variable);

// 2 var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";
//   console.log(food);
// }
// eat();
// console.log(food);
//
// 3 var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);
//
// var new_word = "NEW!";

//1
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

// var first_variable = "Yipee I was first";
// function firstFunc() {
//     var first_variable = "Not anymore!";
//     console.log(first_variable);
//
// }
var food = "Chicken";
function eat() {
    eat = "half chicken";
    var food = "gone";
    console.log(eat);
}

var new_word = "NEW!";
function lastFunc() {
    new_word = "old";
}
console.log(lastFunc);
