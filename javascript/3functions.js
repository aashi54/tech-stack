/*

 function Declaration? (func defination)

function expression?
when you store a function inside a variable

const square = function(num){
    return num*num;
}

console.log(square(5));

* First Class Functions?

where a function can be treated like a variable
in this cases function can be passed to another function
can be used, manipulated and returned from those functions
basically everything that a variable can do a function can also do.

// passsed in another function just like a variable and we can manipulate and return

function square(num){
    return num*num;
}

function displaySquare(fn){
    console.log("Square is " + fn(5));
}

displaySquare(square);

*** What is IIFE?
Immediately invoked function expessions

(function square(num){
    return num*num;
})(5);

*** function Hoisting

 1) functionName();

 function functionName(){
    console.log("Asmita")
 }

 2) function functionName(){
    console.log("Asmita")
 }
 functionName();
 
 Both will give same asnwer as Asmita because functions are hoisted completly


 var x = 21;

 var fun = function(){
    console.log(x);
    var x = 20;
 }

 fun();  // undefined answer (in our global scope x = 21 but in local scope x is already present which is undefined)


 *** params vs Arguments
  function square(num){ // params
    return num*num;
}

square(5) // arguments

*** spread vs rest operator


 function multiply(...nums){ // rest
    console.log(nums[0]* nums[1]);
}
 var arr = [5,6];

 multiply(...arr); // spread

 *** Rest param should be at last
const fn = (a , x,y, ...numbers) => {
    console.log(numbers);
}

fn(5,6,3,7,8,9)


*** Arrow functions (ES6 version) vs nomral
1) Syntax
2) Implicit "return" keyword (can get ride of return)
3) Arguments

function fn(){
    console.log(arguments)
}

fn(2,3,4,5,6)  // we will get arguments without declaration

can't do this in arrow function

4) - "this" keyword

let user = {
    username: "Roadside Coder",

    rc1: () => {
        console.log("Subscribe to " + this.username);
    },


     rc2() {
        console.log("Subscribe to " + this.username);
    },

}

user.rc1();  // pointing to global object
user.rc2();  // local


 */




