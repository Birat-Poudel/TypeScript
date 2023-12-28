function greeting(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hola!");
    }
}

greeting(null);