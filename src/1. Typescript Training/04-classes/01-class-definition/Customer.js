"use strict";
class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let customer = new Customer("Birat", "Poudel");
// customer.firstName = "Martin";
// customer.lastName = "Dickson";
console.log(customer.firstName);
console.log(customer.lastName);
