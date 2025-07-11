//comparision operator 

////console.log(2 > 1)
//console.log(2 >= 1)
//console.log(2 < 1)
//console.log(2 == 1)
//console.log(2 != 1) //not equal to
 

console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0); // false
console.log(null == 0);//false
console.log(null >= 0); //true
//the reason is that an equality check ==and comparisions ><>=<+work differantly comparisons convert null to a number ,treating it as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);  //comparision and equality check is different (==)
//nmostly avoid this type of comparison

/*strict check means using (===) ;if we givs a 2 diff data type then this sign check stricty and give this is a diff tpe also
 givs a data type*/

 console.log("2" === 2);
 