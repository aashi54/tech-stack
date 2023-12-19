// var vs let vs const
// scope

/* Scope is a certain section/region of the program where a defined variable 
has it's existence and beyond that it cannot be accessed.


var is functional scope, let and const is block scoped

let and const are block scoped and from there we get the concept of shadowing.


we can shadow var using let but not the opposite because if we try to do so let using var we will go into illegal shadowing.

const a; ❌ SyntaxError: Missing initializer in const declaration -- you need to intialise a const while declaring it

const gives an error since you can not reinitialize a const variable where as you can do it with a let and const variable.


There are 2 phases :

-> Creation phase

-> Execution phase


*** Creation phase ***

It creates a global or window object

It setups a memory heap for storing functions and variables references. 
It takes all variables and functions to store inside the window object.

It Initializes variables and functions. For variables it initializes with 
undefined and for functions declaration it stores the complete function body and stores inside the window object.

Execution phase

JS engine executes the code line by line. It assigns values to variables 
and executes the function calls.

P.S. : For every function it creates a new execution context

It also uses call stack to keep track of the function calls


During the creation phase JS engines moves the declaration of variables and 
function to the top of the code which is know as hoisting.


let and const => they are hoisted but in temporal dead zone.
It is the time between declaration and initialization of let and const variables.



var, let
closure
object
currying
this keywork
call bind and apply
promises


*/

/*

let a=10;

function multiply(a){
    console.log(3)
return a*20;
}

let b= multiply(20);
console.log(b);

*/

/*

function abc(){

    console.log(a,b,c);

    const c = 30;
    let b = 20; // can't access b before initialization

    var a = 10;
}

abc();

*/
