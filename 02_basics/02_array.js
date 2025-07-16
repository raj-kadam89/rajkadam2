const marvel_Heroes = ["Thor", "Ironman", "spiderman"]
const dc_heroes = ["flash", "superman", "batman"]

marvel_Heroes.push(dc_heroes)
console.log(marvel_Heroes); //by using this next array is take as a single element

marvel_Heroes.concat(dc_heroes)
console.log(marvel_Heroes);

 const allHeroes = marvel_Heroes.concat(dc_heroes)
console.log(allHeroes); //for merge

const newHr = [...marvel_Heroes, ...dc_heroes]


const another_array = [1, 2, 3, [5, 6, 3], 4, [9, 5, 9 ]]
const realArray = another_array.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("rajkumar"));
console.log(Array.from("rajkumar"));

let score = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score, score2, score3));