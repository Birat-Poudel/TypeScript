class User{

    constructor(private _firstName: string, private _lastName: string ) {
        // No need to do internal assignments
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

let user = new User("Birat", "Poudel");
// customers.firstName = "Martin";
// customers.lastName = "Dickson";

console.log(user.firstName);
console.log(user.lastName); 