// setTimeOut
const printHelloWorld = () => {
    console.log("hello world , this is example of setTimeOut");
};
let counter = 0;
const printHelloWorldInterval = () => {
    counter++;
    console.log(counter);
    console.log("hello world , this is example of setInterval");
};

setTimeout(printHelloWorld, 5000);

setInterval(printHelloWorldInterval, 5000);