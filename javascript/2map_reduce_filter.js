/*
Map, Reduce, filter

Array methods which is used to iterate over array
and perform a transformation or computation

What is map() ?

Map methods is used for creating a new from existing one by applying the function to 
each one of the elements of the first array.

const nums = [1,2,3,4];

const multiplyThree = nums.map((num, i, nums) => {
    return num*3;
});

console.log(multiplyThree);


What is filter()?

filter method takes each element in and array and it applies a conditional statement against
if the condition return true the element get pushed into the output array if the condition is false
the element does not get pushed into the output

in short filter element returns only those elements from the array which fullfils the provided criteria


const nums = [1,2,3,4];

const moreThamTwo = nums.filter((num) => {
    return num>2;
});

console.log(moreThamTwo);

What is reduce()?

reduce method reduces an array of values down to just one value


if there is no initial value, it takes first element of array as value for accumulator



const nums = [1,2,3,4];

const sum = nums.reduce((acc, curr, i, nums)=> {

  return acc + curr;
}, 0)

console.log(sum);


map vs forEach

#
map = returns the new array
forEach = modifies the original array

const arr = [2,5,3,4,7];

const mapResult = arr.map((ar) => {
   return ar+2;
})


const forEachResult  = arr.forEach((ar) => {
//    return ar+2;
arr[i] = ar+2; // modifies original array
})

console.log(mapResult);
console.log(forEachResult);


# we can chain stuff on map, in forEach it does not return any array we can't chain

let students = [
    {name: "Asmita", rollNumber:31, marks:80},
    {name: "jenny", rollNumber:15, marks:69},
    {name: "radhika", rollNumber:16, marks:35},
    {name: "kaushal", rollNumber:7, marks:55},
]

Question 1 - Return only name of students in Capital




// Traditional for loop (but messy code)

// map

const names = students.map(stu => stu.name.toUpperCase());

console.log(names)

Question 2 - Return only details of those who scroed more than 60

const details = students.filter((stu) => stu.marks>60)

console.log(details)

Question 3 - sum of marks of all students

const sum = students.reduce((acc,curr) => {
   
   return acc+curr.marks

}, 0)

console.log(sum);

Question 4 - Return only names of students who scored more than 60

const names = students.filter((stu) => stu.marks > 60).map((stu) => {
  return stu.name
})

console.log(names)

Question 5 = Return total marks for students with marks greater than 60
  after 20 marks have benn added to those whoc scoder less than 60

const totalMarks = students.map((stu) => {
    if(stu.marks<60){
        stu.marks += 20;
    }
    return stu;
}).filter(stu=>stu.marks>60).reduce((acc, curr)=> acc+curr.marks,0)


console.log(totalMarks);


*/


