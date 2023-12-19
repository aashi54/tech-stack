/*

Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

Basically Currying doesn’t call a function. It just transforms a function.
 They are constructed by chaining closures by immediately returning their inner functions simultaneously.


why curring?
✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.


** Infinite curring implement console.log(add(5)(2)(4)...infinte)
function add(a){

    return function(b){
        if(b) return add(a+b);
        else return a;
    }
}


*** curring vs partial application
Partial application transforms a function into another function with smaller arity.

*** DOM manipulation
const updateElemText = id => content => document.querySelector(`#${id}`).textContent= content;

const updateHeaderText = updateElemText('header');
updateHeaderText('Hello RoadsideCoder!');


*/


// Asksay saini



/*

1) Using bind

let multiply = function (x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2)
let multiplyBythree = multiply.bind(this,3,5)
multiplyByTwo(3) // y = 3
multiplyBythree(7) // will ingnore 7

*/


