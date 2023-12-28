function render(document: unknown) {
    
    // Type Narrowing
    // if (document instanceof WordDocument) {
    //     console.log("Do something");
    // }

    if (typeof document === "string") {
        console.log(document.toLowerCase())
    }
}