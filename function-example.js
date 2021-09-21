function exampleFunction(firstName, lastName) {
    return firstName + " " + lastName;
}


const getFullName = (firstName, lastName) => firstName.toUppercase() + " ",lastName.toUppercase(),

}
console.log(exampleFunction("john","doe"));
console.log(getFullName("john","doe"));



let person = {
    firstName: "john",
    lastName: "doe",
    age: 22,
    address: "kathmandu",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getAge: function (){
        return this.age;
    },
}
console.log(person);