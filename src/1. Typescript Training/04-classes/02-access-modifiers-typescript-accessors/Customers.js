"use strict";
class Customers {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}
let customers = new Customers("Birat", "Poudel");
// customers.firstName = "Martin";
// customers.lastName = "Dickson";
console.log(customers.firstName);
console.log(customers.lastName);
