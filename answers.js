////////////////////////////////
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
////////////////////////////////
for(let i=1; i<=20; i++) {
    console.log (i)
}
////////////////////////////////
// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
////////////////////////////////
for(let i=0; i<=200; i++) {
    if (i % 2 === 0)
    console.log (i)
}
////////////////////////////////
// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
////////////////////////////////
//NOTE:START WITH THE MOST COMPLICATED THEN WORK TOWARDS THE SIMPLEST
for (let i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if ( i % 5 === 0) {  
        console.log("Buzz");
    } else if ( i % 3 === 0) {
        console.log ("Frizz");
    } else {
        console.log (i);
    }
}
////////////////////////////////
// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
console.log(plantee);

wolfy[3] = "Gothem City";
wolfy[0] = "Gameboy";
console.log(wolfy);

dart[3] = "Upside Down and Hawkins";
console.log(dart);

////////////////////////////////
// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michelangelo)
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
////////////////////////////////
/// USED ALOT OF RESEARCH FOR THIS
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michelangelo"]
for ( let str of ninjaTurtles) {
    const upperCaseStr = str.toUpperCase();
    console.log(upperCaseStr);
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
