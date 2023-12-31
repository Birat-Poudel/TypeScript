### Object Oriented Programming

#### Objects
- Objects are the building blocks of our application.

- A real application consist of hundreds or even thousands of objects working together to solve a problem.

- Object [Data (State), Operations (Behavior)]

- Object [Properties, Methods]

#### Class
- To create an Object, First we need to create a Class.

- A class is a blueprint for creating objects. 

- Class [Object Factory]

- Classes are in PascalCase naming convention.

- A constructor is a special function or method used in a class to initialize an object

### Functional Programming
- Functions are the building blocks of our application. 

#### 1. Read Only and Optional

```TypeScript
class Account {

    private readonly _id: number;
    private _owner: string;
    private _balance: number;
    private _nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this._id = id;
        this._owner = owner;
        this._balance = balance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount!");
        }
        this._balance += amount;
    }

}
```

#### 2. Access Modifiers

- private: We can access properties or methods inside that class only.
- public: If we don't give any access modifier, they are public by default.
          It means they can be used outside the class also.

#### 3. Parameter Properties

```TypeScript
class Account {

    private _nickname?: string;

    constructor(private readonly _id: number, 
                private _owner: string, 
                private _balance: number) {
        // No need to define properties outside of constructor
        // No need to initialize properties inside of constructor
    }

    public deposit(amount: number): void {
        if (amount <= 0){
            throw new Error("Invalid deposit amount!");
        }
        this._balance += amount;
    }

}
```

#### 4. Getters and Setters

```TypeScript
class Account{

    private _nickname?: string;

    constructor(private readonly _id: number, 
                private _owner: string, 
                private _balance: number) {
    }

    public deposit(amount: number): void {
        if (amount <= 0){
            throw new Error("Invalid deposit amount!");
        }
        this._balance += amount;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number): void {
        if (amount < 0){
            throw new Error("Invalid amount!");
        }
        this._balance = amount;
    }

}
```

#### 5. Index Signatures

- With Index signatures, we can create properties dynamically as we can with JS, but with  type checking.

```TypeScript
class SeatAssignment {

    [seatNumber: string]: string;

}

SeatAssignment seats = new SeatAssignment();
seats.A1 = "John";
seats["A1"] = "John";
seats.A2 = "Mary";
```

#### 6. Static Members

- We only have one instance of static members in the memory.
- This is useful for maintaining a global state or information related to the class as a whole.

```TypeScript
class Ride {

    private static _activeRides: number = 0;

    public static get activeRides(): number {
        return Ride._activeRides
    }

    public start(): void {
        Ride._activeRides++;
    }

    public stop(): void {
        Ride._activeRides--;
    }

}
```

#### Notes

- Use TypeGuard to narrow down the type
```TypeScript
if (typeof someObj === "number") {}
```

- GuardClause
    - Use at the top of the function
```TypeScript
if (!order) return;
```

- Use instanceof than typeof while checking custom objects
```TypeScript
typeof account -> (object)
account instanceof Account -> true
```

