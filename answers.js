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
// Here is a list of favMovies:
// Console log: the index of Titanic
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// Use the method pop
// push "Guardians of the Galaxy"
// Reverse the array
// Use the shift method
// unshift - what does it return?
// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

const index = favMovies.indexOf("Titanic");
console.log(index);

favMovies.sort();
console.log(favMovies);

const index2 = favMovies.indexOf("Oculus");
if (index2 > -1) {
    favMovies.splice(index2, 1);
}
console.log(favMovies);

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

favMovies.reverse();
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

favMovies.unshift("The Godfather"); // this put "The Godfather back into the list and in front"
console.log(favMovies);

const index3= favMovies.indexOf("Django Unchained");
if (index3 > -1) {
    favMovies.splice(index3, 1); //SPLICE for removing SLICE for inserting
    favMovies.push("Avatar");
}
console.log(favMovies)

const middleIndex = Math.floor(favMovies.length / 2); // find the middle index
const lastHalf = favMovies.slice(middleIndex); // creating a new array of the lst half of the OG array (half is determined by the middleIndex above)
console.log(lastHalf); // it is only showing me the last half of the array which was given to me from my code above

console.log(favMovies); // it never replaces the OG array it just prints a copy of the new array along with the OG array

console.log(favMovies.indexOf("Fast and Furious")); // i got back 14 as an output and from my research that is because the console log is searching the OG array and not the altered array

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// I was able to change the variable using const because it was an array. array or an object you can stil modifty its properties and elements 




////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
