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

plantee[2]+=1; 
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
    const upperCaseStr = str.toUpperCase(); //str is taking each element withing the array and .toUpperCase is take that uppercase the array
    console.log(upperCaseStr);
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
// Here is a list of favMovies:
// Console log: the index of Titanic
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):


// push "Guardians of the Galaxy"
// Reverse the array
// Use the shift method
// unshift - what does it return?
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

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
const index3= favMovies.indexOf("Django Unchained");
    favMovies.splice(index3, 1); //SPLICE for removing SLICE for inserting
    favMovies.push("Avatar");

console.log(favMovies)

const middleIndex = Math.floor(favMovies.length / 2); // find the middle index
const lastHalf = favMovies.slice(middleIndex); // creating a new array of the lst half of the OG array (half is determined by the middleIndex above)
console.log(lastHalf); // it is only showing me the last half of the array which was given to me from my code above

console.log(favMovies); // it never replaces the OG array it just prints a copy of the new array along with the OG array

console.log(favMovies.indexOf("Fast and Furious")); // i got back 14 as an output and from my research that is because the console log is searching the OG array and not the altered array

// Thought question: that we declared the variagit ble favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// I was able to change the variable using const because it was an array. array or an object you can still modify its properties and elements 
////////////////////////////////
// Where is Waldo
////////////////////////////////
// With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice (1, 1);
// or 
const indexEggbert = whereIsWaldo.indexOf("Eggbert");
    whereIsWaldo.splice(indexEggbert, 1); // whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1); lines 139 and 140 combined
// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One"; //[1][2] comes from the updated array after "Eggbert" was removed
console.log(whereIsWaldo);
// Access and console.log "Waldo"

function findIndexNestedArrays(arr, x) {
  for (let i = 0; i < arr.length; i++) { // starting at the first index and going as long as the array going one by one
    if (Array.isArray(arr[i])) { // if the index that is being ran is part of the array keep going
      const result = findIndexNestedArrays(arr[i], x); // result is equal to 
      if (result !== -1) {
        return [i, ...result];
      }
    } else if (arr[i] === x) {
      return [i];
    }
  }
  return -1;
}

console.log(findIndexNestedArrays(whereIsWaldo, 'Waldo'))

// Code above finds index of Waldo in the array which is [2][1][1]

console.log(whereIsWaldo[2][1][1]);
////////////////////////////////
//  Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
////////////////////////////////
 const randomPhrases = [
      "...human...why you taking pictures of me?...",
      "...the catnip made me do it...",
      "...why does the red dot always get away..."
    ];

 for (let i = 0; i <= 19; i++) {
  if (i % 2 === 0) {
    let randomIndex = Math.floor(Math.random() * randomPhrases.length);
    console.log(randomPhrases[randomIndex]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}
// Need to study .floor methods and .random


////////////////////////////////
//  Find the Median
// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort((a, b) => a - b); // sort the array in ascending order

const len = nums.length;
const mid = Math.floor(len / 2); // check if the length of the array is odd or even
 if (len % 2 === 0) { // if the length of the array is even then ...
    const median = (nums[mid - 1] + nums[mid]) / 2; // calculate the average of the two values at the middle indices ((middle num subtracted by 1 plus middle num) divided by 2)
    console.log(`The median value of the array is ${median}`); 
 } else {
    const median = nums[mid]; // if not even then median equals middle number
    console.log(`The median value of the array is ${median}`);
 }

 /////////////////////////////
 //HUNGRY FOR MORE
 // Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.
///////////////////////////////////

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",      // These are Thom's shirts
    "blue button-up",
  ],[
    "grey jeans",
    "jeans",                    // These are Thom's pants
    "PJs"
  ],[
    "wool mittens",
    "wool scarf",               // Thom's accessories
    "raybans"
  ]
];

// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!