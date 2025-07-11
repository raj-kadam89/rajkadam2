// dates in js  //it is 'object data type

let firstDate = new Date()
console.log(firstDate.toString());
console.log(firstDate.toISOString());
console.log(firstDate.toJSON());
console.log(firstDate.toLocaleDateString());
console.log(firstDate.toLocaleString());

let creatDate = new Date(2024, 3, 10)
console.log(creatDate.toDateString());


let dateCreate = new Date("02-05-2026")
console.log(dateCreate.toLocaleDateString());

let myTime = Date.now()

console.log(myTime);
console.log(Math.floor(Date.now()/1000));


let myDate = new Date()
console.log(myDate.getFullYear());


newDate.toLocaleDateString('default', {
    weekday: "long",
})//it can define the multiple propertieslike time ,date ,etc

