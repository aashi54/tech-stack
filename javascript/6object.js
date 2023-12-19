/*

An object is a collection of related data and/or functionality. 
These usually consist of several variables and functions (which are 
called properties and methods when they are inside objects).

delete user.age;  //delete


const func = (function(a){
    delete a;  // delete keyword is only used when we want to delete properties from an object

    return a;
})(5);

console.log(func); //5


** how to add this property in obj like the video: true
use ""
how to access it?
console.log(user["like the video"]);

delete user["like the video"]

let property = "firstName" ;
let name = "Piyush Agarwal";

let person = {
    [property] : name  // access dynamic property
}

console.log(person);

// print key & value of object (we can use for in loop)

for(key in person){
    console.log(key, user[key]);
}


const obj = {
    a: "one",
    b: "two",
    a: "three",
}

console.log(obj)  // a = "three" and b

Q => Create a function multiplyByTwo(obj)
 that multiply all numberic property values of nums by 2

const a = {};
const b = {
    key : "b"
}

const c = {
    key: "c"
}

a[b] = 123;  // b is assined as ["object object"]
a[c] = 456;  //"object object"]

console.log(a[b]); // 456


*** Stringify vs parse
JSON = JavaScript Object Notation
stringify ==> object to JSON
parse  ==> JSON to object

const user = {
    name: "Piyush",
    age: 24,
}

const strObj = JSON.stringify(user);

console.log(strObj.name) //can't access key like this need to convert in obj again
 used for storing inside local storage (can't store obj directly)
console.log([..."Asmita"]) // spread characters



const settings  = {
    username : "Piyush",
    level: 19,
    health:90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data)  // only stringfy level and health


*** Destructring
taking out property from obj

const user  = {
    username : "Piyush",
    age:24,
    fullName : {
        first : "",
        last : "Agrawal"
    }
};
const {fullName : {first}} = user  // nested destructuring

spread operators can be used in between



let c = {greeting : "Hey!"};
let d;
d = c; // we do not copy obj on to another we just provide the reference to this obj to this variable
// will affect both

c.greeting = "Hello";
console.log(d.greeting); // Hello

{a:1} == {a:1}
{a:1} === {a:1} // false for both ,
both are different obj pointing to different locations
 



let person = {name : "Lydia"};
const members = [person];
person = null; // modifying complete variable not property (will give obj)
// person.name = null (give null)
console.log(members);




const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

20, 20, 20, 40

*/









