let phone = <HTMLInputElement> document.getElementById("phone");
let phone1 = document.getElementById("phone1") as HTMLInputElement;
phone.value

// Doesn't perform any TYPE CONVERSION under the hood
// For telling the compiler we know more about the type of the object