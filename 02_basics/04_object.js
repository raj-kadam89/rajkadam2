const tinderUser = new Object()
const tinderUser2 = {}
console.log(tinderUser); //no value ad in object then only blank bracket print 
console.log(tinderUser2);

tinderUser.id = "1234and"
tinderUser.name = "raj"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "raj",
            lastname: "kadam"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);


//console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "s"}

//const obj3 = {"obj1, obj2"}
//const obj3 = Object.assign({}, obj1, obj2)  //also use "target" on the place of assign

//console.log(obj3);      //using this we merge the objecr in vary elements ..or
 const obj3 = {...obj1, ...obj2};  //merge using spread operator, this is easy
console.log(obj3);    //max time use this because it is a simple and lastet

//if come lot of data from data base how we done it 

//using array
 
const users = [
    {
        id: "1" ,
        email: "raj@gmail.com"
    }
]

//user[1.email]
console.log(tinderUser);
console.log(Object.keys(tinderUser));   //for the keys or property
console.log(Object.values(tinderUser));  //for value of the property
console.log(Object.entries(tinderUser));  //property and value bind in the array 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //it give can value presents in the "object"

//Destructuring

const course = {
    coursename: "js in hindi",
    price: "799",
    courseInstructor: "hitesh"
}


 //console.log(course.courseInstructor);


const {courseInstructor: instructor} = course    //this is a destructuring 

console.log(instructor); 

const navbar = () => {

}

navbar(company = "rajkumar"),

//JSON
{
    "name": "rajkumar",
    "coursename": "js in hindi",
    "price": "free"
}


//API in array  format 
[
     {},
    {},
    {}
]
