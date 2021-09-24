// const getHelloWorldPromise = () => {
//     return new Promise((resolve, reject) =>{
//         resolve("hello world");
//         reject("there was some error");
//     });
// };


// console.log(getHelloWorldPromise);

// getHelloWorldPromise()
// .then((result) =>{
//     console.log("Success:", result);
// })
// .catch((error) => {
//     console.log("Error:", error);
// });



const getUserList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(["Cristiano", "Ronaldo"]);
                //reject("There was some error fetching students data");
        },5000);
        
    });
};

getUserList().then((students) => {
    console.log("Success:", students);    
})
.catch((error) => console.log(error));  
