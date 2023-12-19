/*
Closure is a combination of function bundled together with it's lexical environment. 
It is a function that references variables in the outer scope from it's inner scope

A Lexical scope in JavaScript means that a variable defined outside a function can 
be accessible inside another function defined after the variable declaration. But 
the opposite is not true; the variables defined inside a function will not be accessible outside that function.

closure is created every time a function is created

1st we are returing in this example
function makeFunc(){
    var name = "Mozilla";

    function dislayName(){
        console.log(name);
    }

    return dislayName;
}

var myFunc = makeFunc(); // or makeFunc()();
myFunc()

why closure?
makes it possible for a function to have private variables


***Closure Scope chain

Closures have three scopes :

Local Scope (Own scope)

Outer Functions Scope

Global Scope

If an outer function is a nested function then the outer function's scope
includes the enclosing scope of the outer function which creates a chain of function scopes.

// print 0,1,2 using var only , make changes in below code

function a(){
    for(var i =0;i<3;i++){
        setTimeout(() => {
       console.log(i)
        }, i*1000)
    }
}

a();


  for(var i =0;i<3;i++){

        function inner(i){
            setTimeout(() => {
                console.log(i)
                 }, i*1000)
        }

        inner(i); // it's not going to reference the same memory value
        // it will create a whole new memory
     
    }


    ** Mudule pattern

    The return statement of the Module contains our public functions. The private functions are just those 
    that are not returned. Not returning functions makes them inaccessible outside of the Module namespace.
     But our public functions can access our private functions which make them handy for helper functions, AJAX calls, and other things.

var Module = (function() {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function() {
            // can call privateMethod();
        }
    };
})();



*/


  