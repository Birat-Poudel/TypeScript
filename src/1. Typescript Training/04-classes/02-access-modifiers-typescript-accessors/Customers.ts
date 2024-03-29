class Customers {

    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    
    public get firstName(): string{
        return this._firstName;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

}

let customers = new Customers("Birat", "Poudel");
// customers.firstName = "Martin";
// customers.lastName = "Dickson";

console.log(customers.firstName);
console.log(customers.lastName); 