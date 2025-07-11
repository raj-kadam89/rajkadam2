// ***************************String**************

const name = "raj" 
const marksCount = 60 

console.log(name + marksCount + "value"); //this isnot a right way to attch the string 

//this is best way
console.log(`hello my name is ${name} and my marks Count is ${marksCount}`); //this is a write way this is write in a backtexx (``)


//one more way to ddeclare string


const gameName =( 'rajgg')

console.log(gameName);

 console.log(gameName[0]) //this is a key value access

 console.log(gameName.toUpperCase);
 console.log(gameName.length);
 console.log(gameName.charAt);
 console.log(gameName.charAt(3)); //gives the positionn of the the charactor in the consreuctor

 //

console.log(gameName.charAt('j')); //output is in the number 

const newString = gameName.substring(0, 4)

console.log(newString);// in line 30 this is a way in which we break the constructor in the variable

const anotherString = gameName.slice(-5, 3)
console.log(anotherString);   //using this we reverse as well as direct separation possible

const newStringOne = "     raj   "
console.log(newStringOne);

console.log(newStringOne.trim()); // by this way we remove the unwanted space which is in the string 

const url = "https.rajkadamm.com//%20rajkumar"
console.log(url.replace('%20' , '-' )); //by using this wwe replace the the any charactor in the log text or specially url
console.log(url.includes('rajkumar'));  //this is Q we ask the cm   aur present or not then we give thae answer in the true or false

//split on the basis oof the specific sign present in the string eg.
const newName = ("raj-kadam-rutu-gana")
console.log(newName.split('-'));




