////////////////////////////////////////////
// Easy Going
////////////////////////////////////////////

// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// }

////////////////////////////////////////////
// Get Even
////////////////////////////////////////////


// for (let i = 0; i <= 200; i++) {
//     if (i % 2 == 0) {
//         console.log(i); 
//     }
// }

////////////////////////////////////////////
// Fizz Buzz
////////////////////////////////////////////

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 ===0)
//     console.log("FizzBuzz") 
//     if (i % 3 === 0) 
//         console.log("Fizz") 
//     if (i % 5 === 0) 
//         console.log("Buzz") 
//     else (console.log(i))
// }

////////////////////////////////////////////////////////////////////////
// Wild Wild Life
////////////////////////////////////////////////////////////////////////


// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001;
// console.log(plantee);

// wolfy[3] = "Gotham City";
// wolfy[0] = "Gameboy";
// console.log(wolfy);

// dart.push("Hawkins");
// console.log(dart);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// const allCaps = []

// for (let item of ninjaTurtles) {
//     allCaps.push(item.toUpperCase());
// }
// console.log(allCaps)

////////////////////////////////////////////////////////////////////////
// Methods, Revisited
////////////////////////////////////////////////////////////////////////


// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8])
// //Titanic

// favMovies.sort();
// //Thought question: What do this do to the array? 
// //Answer: It sorted the array in alphabetical order.

// favMovies.pop();

// favMovies.push("Guardians of the Galaxy")

// favMovies.reverse()

// favMovies.shift()

// favMovies.unshift()

// favMovies.splice(14, 1, 'Avatar');
// //Thought question: Did this permanently alter our array? 
// //Answer: Yes

// let halfMovies = favMovies.slice(9, 18);
// console.log(halfMovies)
// //Thought question: Did this permanently alter our array?
// //Answer: No

// console.log(favMovies)

// console.log(favMovies[13])

////////////////////////////////////////////////////////////////
// Where is Waldo
////////////////////////////////////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// let removedName = whereIsWaldo.splice(1,1);

// let twoD = whereIsWaldo.flat()

// twoD.splice(4, 1 ,"No One");

// let oneD = whereIsWaldo.flat(2)

// console.log(oneD[8]);

////////////////////////////////////////////////////////////////
// Excited Kitten
////////////////////////////////////////////////////////////////

// const addedPharses = [
//     "...human... why you taking pictures of me...?", 
//     "...the catnip made me do it...", 
//     "...why does the red dot always get away...?" 
// ];

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//       const randomPhraseIndex = Math.floor(Math.random() * addedPharses.length);
//       console.log(addedPharses[randomPhraseIndex]);
//     } else {
//       console.log("Love me, pet me! HSSSSSS!");
//     }
//   }

////////////////////////////////////////////////////////////////
// Find the Median
////////////////////////////////////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

const sortNums = nums.sort((a, b) => a - b);

const midIndex = Math.floor(sortNums.length / 2);

if (sortNums.length % 2 === 0) {
    const median = (sortNums[midIndex -1] + sortNums[midIndex]) / 2;
    console.log(median);
} else {
    const median = sortNums[midIndex];
    console.log(median);
}













