//convesions or operations
let score ="33"
/*no is always in free form not need  a "" if we apply then it will be a string data type
*/
//console.log(typeof score) //or
//console.log(typeof (score))

let thevalueInNumber= Number(score)
//console.log(typeof thevalueInNumber)


//33=> easily convert into the number 33
//"33abc" =>not covert into the the number gives the "NaN"
//"true"=> conveet in the the "1" and false "0"

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)


//1=>true ; 0=>falsse
//""=> false
//"raj" => true


let number = 33 
 
//let stringnumber = String(number)

//console.log(stringnumber)

//  console.log(typeof stringnumber)





// ******************Operations*****************


let value = 3
let negvalue = -value

console.log( negvalue)


/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2+2);
console.log(2%2);*/

let str1 = "hello"

let str2 = "raj"

let str3 = str1 + str2

console.log(str3)  //this is the bind odf string


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2") //observe brackets  string value is present which is affect on the additions but this is not right way 
//also console.log(3 + 4 * 4 % 6) not right way


let gamecounter = 100 ;
++gamecounter;
console.log(gamecounter);


