// // let exampleArray = [1, 2, 3, 4, 5];
// // console.log(exampleArray.length);
// // console.log(exampleArray[exampleArray.length - 1]);


// // // let objectExample = {
// // //     name: "john",
// // //     age: 30,
// // // };
// // // console.log(objectExample.age);


// // let array1 = ["apple", "mango"];
// // let array2 = ["orange", "banana"];
// // console.log([...array1, ...array2]);


// // let object1 = {
// //     name:"john",
// //     age:30,
// // };

// // let object2 ={
// //     address:"kathmandu",
// // };

// // let object3 ={...object1, ...object2};

// // let {name, age, address} = object3;
// // console.log(object3);


// //push
// let pushExample = ["apple", "banana"];
// pushExample.push("orange");
// console.log(pushExample);

// //pop
// let popExample =["apple", "banana", "mango"];
// popExample.pop();
// console.log(popExample);


// //shift
// let shiftExample = ["apple", "banana", "avacado"];
// shiftExample.shift();
// console.log(shiftExample);

// //unshift
// let unshiftExample =["apple", "mango"];
// unshiftExample.unshift("orange");
// console.log(unshiftExample);


// //splice
// let fruits = ['apple', 'mango', 'avacado'];
// fruits.splice(1,1);
// // fruits.splice(1,2,'orange', 'mango');
// console.log(fruits);


// //slice
// let sliceExample = ["mango", "apple", "avacado", "kiwi", "orange"];
// let newSlicedArray = sliceExample.slice(1,3);
// console.log(sliceExample);
// console.log (newSlicedArray);

// //forEach Loop
// const loopFunction = (value, index) => {
//     console.log("key: ", index)
//     console.log("value: ", value)
// };
// sliceExample.forEach(loopFunction);


// //Map very important
// let numbers = [1,2,3,4,5];

// let newNUmbers = numbers.map((value, index) => {
//     return value * 2;
// });
// console.log(numbers);
// console.log(newNUmbers);


// let name = ['ram', 'hari', 'sam'];
// console.log(name);
// let upperCaseName = name.map((value, index) =>{
//     return value.toUpperCase();
// });

// console.log(upperCaseName);


// //filter example
// let agesArray = [15, 20,30];

// let aboveTwenty =  agesArray.filter((age) => {
//     return age > 20;
// });
// console.log(agesArray);
// console.log(aboveTwenty);


// let array = [1,2,3,4,5];

// for (let i=0; i<array.length; i++){
//     console.log(array[i])
// }


// //delete
// let person = {
//     name: "john",
//     age:22,
//     address:"kathmandu"
// };

// delete person.address;
// console.log(person);



// //iterators
// let countryArray = ["nepal", "india", "china", "japan"];
// for (let country of countryArray) {
//     console.log(country);
// }




let objectExample = {
    name: "john",
   age:22,
    address:"kathmandu",

}

for (let obj in objectExample) {
    console.log(objectExample[obj]);
}

console.log(Object.values(objectExample))
console.log(Object.keys(objectExample))

