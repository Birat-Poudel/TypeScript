let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i: number = 0; i <sportsOne.length; i++) {
    console.log(sportsOne[i])
}

for (let tempSport of sportsOne) {
    console.log(tempSport);
}