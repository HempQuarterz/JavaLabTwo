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

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
const allCaps = []

for (let item of ninjaTurtles) {
    allCaps.push(item.toUpperCase());
}
console.log(allCaps)