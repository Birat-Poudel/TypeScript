type Person = {
    birthday?: Date
}

function getPerson(id: number): Person | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

// Optional Property Access Operator
console.log(getPerson(0)?.birthday?.getFullYear);

// Optional Element Access Operator
let persons: number[] = [];
console.log(persons?.[0]);

// Optional Call
let log: any = null;
log?.('a');