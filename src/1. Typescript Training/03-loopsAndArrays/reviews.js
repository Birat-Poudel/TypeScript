"use strict";
let reviews = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
let average = total / reviews.length;
console.log(`Review average = ${average}`);
