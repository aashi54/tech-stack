/*

Call. bind, Apply

You can use these methods to tie a function into an object and call the function as if it belonged to that object

The call() method calls the function with a given this value and arguments provided individually.

function sayHello(a, b){
    return a + " " + b + " Hello " + this.name;
  }
  
  var obj = {name: "Piyush"};
  
  console.log(sayHello.call(obj, 7,1)); // 7 1 Hello Piyush

Apply => takes all arguments in form of array

Bind => 

  */

// const person = {
//    name : "patidar"
// }

//   const user = {
//     name : "Asmita",

//    sayHello(){
//         return "Hello " + this.name;
//     }
//   }

//   const func = user.sayHello.bind(person);
  
//   console.log(func());

// function sayHello(){
//     return "Hello " + this.name;
//   }
  
//   var obj = {name: "Piyush"};
  
//   const helloFn = sayHello.bind(obj);
  
//   console.log(helloFn());



/*

the value of the this keyword is dependent on where you use it.


const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }

Solution 
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);  #0 Lion: King #1 Whale: Queen
}

.......

array.push.apply(array, elements); //[a,b,0,1,2]

..........

if a function is bind to any object it will always
bind with that obj, will not change

......................

Aksay saini


*/
  