//Fundamental Types

let sales: number = 123_456_789
let course: string = "TypeScript"
let is_published: boolean = true

let level: any
level = 1
level = "a"
let g: any = []

let numbers: number[] = [1,2,3] //Array
let sum: number = 0
numbers.forEach(n => sum += n) //Calls a function for each element in an array
console.log(sum)

let user: [number, string] = [1, 'Birat'] //Tuple

const enum Size {Small = 1, Medium = 2, Large = 3} //Enum
let mySize: Size = Size.Medium

function calculateTax(income: number, taxYear = 2022): number{ //Function
    if (taxYear < 2022)
        return income*1.2
    return income*1.3
}
calculateTax(200_000)

let employee: { //Object
    readonly id: number, 
    name?: string //To make a property optional
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Birat",
    retire: (date: Date) => console.log(date)
}