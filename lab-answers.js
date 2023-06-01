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

// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// const allCaps = []

// for (let item of ninjaTurtles) {
//     allCaps.push(item.toUpperCase());
// }
// console.log(allCaps)


const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8])
//Titanic

favMovies.sort();
//Thought question: What do this do to the array? 
//Answer: It sorted the array in alphabetical order.

favMovies.pop();

favMovies.push("Guardians of the Galaxy")

favMovies.reverse()

favMovies.shift()

favMovies.unshift()

favMovies.splice(14, 1, 'Avatar');
//Thought question: Did this permanently alter our array? 
//Answer: Yes

let halfMovies = favMovies.slice(9, 18);
console.log(halfMovies)
//Thought question: Did this permanently alter our array?
//Answer: No

console.log(favMovies)

console.log(favMovies[13])





