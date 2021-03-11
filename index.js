//primitive data types

// string

let name = "umesh";
console.log("My string is " +  name);
console.log("Data type is " + (typeof name));

//numbers
let marks = 34;
console.log("Data type is " + (typeof marks));

//boolean
 let isDriver = true;
 console.log("Data type is " + (typeof isDriver));

 //Null
 let nullVar=null;
 console.log("Data type is " + (typeof nullVar));

 //undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

//reference data types

//arrays
let myarr =[1,2,3,4,false,"string"];
console.log("Data type is " + (typeof myarr));

//object literals
let stMarks = {
    harry: 90,
    sonu: 86,
    monu: 94,
    raju: 91,
}
console.log(stMarks);

function findName(){

} 
console.log(typeof findName);

let date = new Date();
console.log(typeof date);
