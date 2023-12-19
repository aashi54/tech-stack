/*

Event propogation => the process to decide when and on which direction event will executre 

Bubbling(default) => events execute from bottom up
 focus , blur do not bubble (search)


event.target vs this.target vs event.currentTarget

current target => which is currently executed
event target => on which we clicked

this.target => 

capturing => top to bottom

div.EventListner("click" , () => {
alert("div")
}, {
    cature: true
})

.....

How to stop both?

div.addEventListner("click", function(e){
    e.stopPropagation()
    alter("div")
})


.......................
Event Delegation

is where we add event listeners to the parent elements
instead of adding them to the descendant elements


 */


function copyByRefObjects() {

    var product = {
    
    name: "A 20",
    
    brand: "Mercedes Benz",
    
    };
    
    var prodCopy = product;
    
    product.address = "Bangalore";
     prodCopy["phone"] = 12345;
     
     console.log("Product:", product);
      console.log("Product copy:", prodCopy) 
    
    }

    copyByRefObjects();