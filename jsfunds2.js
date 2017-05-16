function loopXtoZ(x,y){
    sum = x + y;
console.log(sum)
}
loopXtoZ(5,12)
loopXtoZ(8,17)

function ArrMin(){
    var array = [40, 100, 1, 5, 25, 10];
    var min = array[0];
    for (var i = 0; i < array.length; i++){
    if (min > array[i]){
    min = array[i]
    }
}
console.log(min)
}
ArrMin()



function ave(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum/arr.length)
}
/////////////Rewrite////////////////
var looper_var = function(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
};

var minFinder_var = function minFinder(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
};


var ave_var = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

////////rewrite as methods/////////////

function my_object(looper, minFinder, ave) {
    this.firstName = looper_var;
    this.lastName = minFinder_var;
    this.age = ave_var;
}


/////////////////////////////////

var person = {
    name : "Fred",
    distance_traveled : 0,
    say_name : function(){
        console.log(person.name);
    },
    say_something: function(param){
        console.log(`${person.name} says: ;${param}`);
    },
    walk : function () {
        console.log(`${person.name} is walking!`);
        person.distance_traveled += 3;
        return person;
    },
    run : function() {
        console.log(`${person.name} is running!`);
        person.distance_traveled += 10;
        return person;
    },
    crawl : function(){
        console.log(`${person.name} is crawling`);
        person.distance_traveled += 1;
        return person;
    }
}

var a_person = person.walk();
