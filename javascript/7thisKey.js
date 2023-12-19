/*
"this" keyword
the ‘this’ keyword is used to reference something — an object!


**Implicit Binding
Implicit Binding is applied when you invoke a function in an Object using the dot notation. 
this in such scenarios will point to the object using which the function was invoked.

**Explicit Binding
you can force a function to use a certain object as its this. 
Explicit Binding can be applied using call(), apply(), and bind().



*/

// var a = 5;

// {  
//     var a = 10;
//     function func(){
//         var a = 7;
//         console.log(this.a)
//     }
// }
// function points to window object if it's not inside object
// normal functions points to their immediate parent


// let user = {
//     name: "Asmita",
//     age: 24,
//     getDetails(){
//         console.log(this.name); // points to parent obj
//     }
// }

// user.getDetails(); 

// Arrow function

// let user = {
//     name: "piyush",
//     age: 24,

//     car : {
//         getDetails : () => {
//             console.log(this) // window opbject
//         },
//     }
    
// };

// user.car.getDetails(); 

// let user = {
//     name : "Asmita",
//     age: 24,
//     getDetails(){
       
//         const nestedArrow = () => console.log(this.name); // reference to parent func, parent func takes value from obj user

//         nestedArrow();
//     }
// }

// user.getDetails();


/*

class user {
    constructor(n){
        this.name = n 
    }
    getName(){
        console.log(this.name);
    }
    // both this points to variables in constructor
}

const User = new user("Piyush") // => This will generate a user object from the above class
User.getName();  // Piyush


function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? (nothing)

That’s because rules that set this do not look at object definition. Only the moment of call matters.

Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.

The value of this is one for the whole function, code blocks and object literals do not affect it.

So ref: this actually takes current this of the function.


.............

const user = {
   name: 'Piyush Agarwal!', 
   logMessage() {
     console.log(this.name); // What is logged? 
    } };
    
    setTimeout(user.logMessage, 1000);

(nothing because setTimeout is taking callback func that function is copied here and will be called later,
   it do not have reference of it's obj)

how to fix it use function instead of callback 
setTimeout(function() {
    user.logMessage();
},1000);


*/