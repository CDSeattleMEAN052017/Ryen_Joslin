// JS Fundamentals Part I
// It’s important that you get familiar with using JavaScript arrays and objects, as well as if/else statements and for-loops. After all, these components comprise about 90% JavaScript apps. These basic assignments are here to help you begin. For an added challenge, try incorporating some ES6 syntax into your solutions.
//
// Create an index.html file and include <script> tags for your JavaScript to complete the following exercises:
//
// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value. Add a new value (100) in the array x using a push method. Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now. Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum. Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
// Then:
// Move the code from inside the <script> tag into a main.js file. In the index.html change the <script> tag to: <script src = 'main.js'> Reload the index.html and open up the console on your browser.
//
// Next:
// Open your terminal (we switch from client side to ‘server side’ here!), navigate to the folder with main.js file and run nodemon main.js.
// Write a for-in loop that will navigate through the object below (or write your own object):
//
// var newNinja = {
//  name: 'Jessica',
//  profession: 'coder',
//  favorite_language: 'JavaScript', //like that's even a question!
//  dojo: 'Dallas'
// }
// Copy
// And console.log() each key value pair.

x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (var i = 0; i < x.length; i++);
x.push(100);
console.log(x)

a = [1, 5, 90, 25, -3, 0]
sum = 0
for (var i = 0; i < a.length; i++);
sum  = sum + a[i]
console.log(sum)
