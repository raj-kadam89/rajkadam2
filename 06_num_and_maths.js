const score = 400
console.log(score)

const balance = new Number(100) //from this we define the number specifically 
console.log(balance);

console.log(balance.toString()); //string make so we can also check length or other string 

console.log(balance.toFixed(3));  //for fixed charactors in the console

 const othernumber = 23.8966
console.log(othernumber.toPrecision(3)); //round accorrding to the pricision number 
  
const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));//for corvert into the speciffic as per the data 

const lame = hundreads.toLocaleString('en-IN')
console.log(typeof 'lame');


//**************************************math************************** */


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.6));
console.log(Math.ceil(5.5));  //upper
console.log(Math.floor(5.9)); //lowest
console.log(Math.min(4, 5, 2, 9));
console.log(Math.max(9, 5, 6, 3));


console.log(Math.random()); //always in betw 0 yo 1
console.log((Math.random()*10)+1);

const max = 10;
const min = 20;

console.log(Math.floor(math.random() * (max - min + 1 )) + min);


