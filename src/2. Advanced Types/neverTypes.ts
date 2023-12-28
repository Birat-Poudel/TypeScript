function reject(message: string): never {
    throw new Error(message);
}

function eventProcess(): never {
    while (true) {

    }
}

reject("Error");
eventProcess();
console.log("Hi");