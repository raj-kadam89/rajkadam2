 //arryas//


const myArr = [0, 1, 2, 3, 4, 5]



const myArr2 = new Array(1, 2, 3, 4,)
console.log(1);


 //Arrays methods//

myArr.push(9)
console.log(myArr); //for add value
myArr.pop()
console.log(myArr);//for remove the last value present in the variable 

myArr.unshift(9)
console.log(myArr);//shift the last value at starting 

myArr.shift()
 console.log(myArr);// remove the starting value
 console.log(myArr.includes(9)); //when present or absent gives the value in the boolean
 console.log(myArr.indexOf(8));
 console.log(myArr.indexOf(5));//indexof: we use this for value present or not in the array or variable if present 
 // then give value when not the give the -1


 const newArr = myArr.join()
 console.log(newArr); //in this we joint the arrays and convert it into the string data type
 console.log(myArr);
 
 //slice, splice methods

 console.log("A", myArr);

 const newOne = myArr.slice(1, 3)

 console.log(newOne);
 console.log("B", myArr);


 
 console.log("A", myArr);
 const newtwo = myArr.splice(1, 3)
 console.log(newtwo);

 console.log("B", myArr);
 console.log("c", myArr);



