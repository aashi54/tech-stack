/*

console.log("start");

function importantAction(username){
    setTimeout(()=> {
        return `subscribe to ${username}`;
    },1000)
}

const message = importantAction("Roadside coder");

console.log(message);

console.log("stop");

//output => start undefined stop



Promise => represents the upcomming completion or failure of
an asynconous event

console.log("start");

function importantAction(username, cb){
    setTimeout(()=> {
      cb(`subscribe to ${username}`)
    }, 1000) // ydi yaha 0 hoga tb bhi last me execute hoga
}

const message = importantAction("Roadside Coder", function(message){
    console.log(message) // inside a callback function so will execute after

})

console.log("stop")

// Output 
// start
// stop
// subscribe to Roadside Coder (before it was in snycronous code)


nested callback => callback hell



console.log("start");

const sub = new Promise((resolve, reject)=> {
 setTimeout(() => {
 const result = true;
 if(result) resolve("Subscribed to roadside")
 else reject(new Error("Why not?"))
 },2000)
});


console.log(sub) // pending (2nd)
// how to execute promise
sub.then((res) => {
   console.log(res)
}).catch((err) => {
    console.log(err)
})

console.log("stop")



console.log("start");

function importantAction(username){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve(`subscribe to ${username}`)
        },0)
    });
}

// more funcs

importantAction("Roadside Coder").then((res) => {
    console.log(res);
    return likeTheVideo("Js interview quest")
}).then((res) => {
    console.log(res);
    return shareTheVideo("js q")
}).catch(() => {
    
})

console.log("stop")


** Promise.all
Promise.all([
    importanatAction("Roadsidecoder")
      likeTheVideo("Roadsidecoder")
]).then((res)=> {

}).catch((err)=> {

})

** Promise.race => give the promise which resolves 1st
** Promise.allSettled => if any one fails still it will return all
** Promise.any => ignore rejcted and return only fullfiled (if all fail give erro)


//Mordern approch to handle promise

const result = async() => {
    try{
 const message1 = await importantAction("Roadside coder")
      const message2 = await likeTheVideo("Roadside coder")

console.log({message1, message2}) 
    } catch(err){
        console.log("failed")
    }
   
    }



    
console.log("start");

// when this promise initialized it's gonna find whatever syncrouns code is inside it

const promise1 = new Promise((resolve,reject) => {
    console.log(1);
    resolve(2); // if there will be no resolve it will not go inside .then block
    console.log(3);
})

promise1.then((res) => {
    console.log(res);
}) // promise is asnycronous operation

console.log("end")  
// output => start 1 3 end 2

..............

console.log("start")

const fn = () => 
    new Promise((resolve, reject) => {
        console.log(1);
        resolve("success")
    })


console.log("middle")

fn().then((res) => {
    console.log(res)
})

console.log("end")
......................







function job(){
    return new Promise(function (resolve, reject){
        reject();
    })
}

let promise = job();

promise.then(function(){
    console.log("success 1");
}).then(function(){
    console.log("success 2")
}).then(function(){
    console.log("success 3")
}).then(function(){
    console.log("success 4")
}).catch(function(){
    console.log("Error 1")
}).then(function(){
    console.log("succes 5")
}).catch(function(){
    console.log("Error 2")
})

// output Error1 success 5

*/


