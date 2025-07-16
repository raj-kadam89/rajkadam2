// singleton 


//Object create //this  is the another way for object declaration //includes sigleton methods
//in the onbjects for access treat any key as there data type
//object literals 

const mySym = Symbol("mykey1")

const JsUser = {
    name : "rajkadam" ,
    age : 18 ,
    mysym: "mykey1" ,
    location : "pune" ,
    email: "rajkadam9898@gmail.com"
    
}
//it gives the key access or all output which is the in the object in console

console.log(JsUser.email); // this is not a proper way for access the obejcrs key
console.log(JsUser["age"]) //using square bracket is good for access the objects
console.log(JsUser[mySym]);
JsUser.email = "raj@chatgptgmail.com"
console.log(JsUser.email);
//Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hellow js user ");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







