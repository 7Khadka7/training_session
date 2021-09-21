// let exampleArray = [1, 2, 3, 4, 5];
// console.log(exampleArray.length);
// console.log(exampleArray[exampleArray.length - 1]);


// // let objectExample = {
// //     name: "john",
// //     age: 30,
// // };
// // console.log(objectExample.age);


// let array1 = ["apple", "mango"];
// let array2 = ["orange", "banana"];
// console.log([...array1, ...array2]);


// let object1 = {
//     name:"john",
//     age:30,
// };

// let object2 ={
//     address:"kathmandu",
// };

// let object3 ={...object1, ...object2};

// let {name, age, address} = object3;
// console.log(object3);


//push
let pushExample = ["apple", "banana"];
pushExample.push("orange");
console.log(pushExample);

//pop
let popExample =["apple", "banana", "mango"];
popExample.pop();
console.log(popExample);


//shift
let shiftExample = ["apple", "banana", "avacado"];
shiftExample.shift();
console.log(shiftExample);

//unshift
let unshiftExample =["apple", "mango"];
unshiftExample.unshift("orange");
console.log(unshiftExample);


//splice
let fruits = ['apple', 'mango', 'avacado'];
fruits.splice(1,1);
// fruits.splice(1,2,'orange', 'mango');
console.log(fruits);


//slice
let sliceExample = ["mango", "apple", "avacado", "kiwi", "orange"];
let newSlicedArray = sliceExample.slice(1,3);
console.log(sliceExample);
console.log (newSlicedArray);

//forEach Loop
const loopFunction = (value, index) => {
    console.log("key: ", index)
    console.log("value: ", value)
};
sliceExample.forEach(loopFunction);


