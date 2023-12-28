"use strict";
class User {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        // No need to do internal assignments
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
let user = new User("Birat", "Poudel");
// customers.firstName = "Martin";
// customers.lastName = "Dickson";
console.log(user.firstName);
console.log(user.lastName);
