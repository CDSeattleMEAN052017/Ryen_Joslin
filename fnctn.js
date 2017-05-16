function runningLogger(){
    console.log('I\'m running')
}
runningLogger()

function multiplyByTen(number){
var result = 0;
result = number * 10;
return result
}
console.log(multiplyByTen(3))

function stringReturnOne(){
string = 'one chicken'
return string
}
console.log(stringReturnOne())

function stringReturnTwo(){
string = 'two chicken'
return string
}
console.log(stringReturnTwo())

function caller(param){
    if(typeof param == 'function'){
        param()
    }
}
console.log(caller())

function myDoubleConsoleLog(param1, param2){
    if(typeof param1 == 'function'){
        param1()
    }
    if(typeof param2 == 'function'){
        param2()
    }
}
(myDoubleConsoleLog(function runningLogger(){
    console.log(1)

(caller2);

function caller2(param){
    console.log('string');

    if(typeof param == 'function'){
        setTimeOut(param, 2000)
    }
    console.log('ending?')
    return 'interesting'
}
caller2(function runningLogger(){

    console.log('I\'m changing')
});
