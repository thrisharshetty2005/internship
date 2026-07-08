let name="Reena";   //using let
var last_name="Kumari";   // using var
var full_name=name+last_name;  // concatinationg the string
const pie=3.14;     //using const
console.log("My name is "+full_name);
console.log("The value of pie is "+pie);


//Arithmatic Operators
let a=10;
let b=20;
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Modulus:",a%b);

console.log("Increment:",++a);
console.log("Decrement:",--b);


//Assignment Operators
let x=10;
x+=5;
console.log("X Values: "+x);

let age=18;
let bb="28";
 if(age===bb){
    console.log("True");
 }else{
    console.log("False");
 }

 let agee=18;
let bbb="28";
 if(agee==bbb){
    console.log("greater");
 }else{
    console.log("less than");
 }

 let n=18;
let y="28";
 if(n<y){
    console.log("greater");
 }else{
    console.log("less than");
 }

 let k=18;
let l=28;
 if(k<=l){
    console.log("true");
 }else{
    console.log("false");
 }

 let p=18;
let s=28;
 if(p!==s){
    console.log("true");
 }else{
    console.log("false");
 }

 let o=18;
let g=28;
 if(o===g){
    console.log("true");
 }else{
    console.log("false");
 }



let agge=22;
let hasId=true;
if(agge>=18 && hasId){
    console.log("Entry Allowed");
}else{
    console.log("Entry not allowed");
}

let aggee=22;
let hassId=true;
if(agge>=18 || hassId){  //using logical operator
    console.log("Entry Allowed");
}else{
    console.log("Entry not allowed");
}


let isLoggedIn=true;
if(!isLoggedIn){
    console.log("User not logged in");
}else{
    console.log("User logged In");
}


let num=10; //Number Data Type
console.log("Number Data Type:",num)

let gram=10.5;  //Number Data Type
console.log("Number(using float) Data Type:",gram);

let color="Green";  //String Data Type
console.log("String Data Type:",color);


//Boolean Data Type
let isprime=true;
console.log("Boolean Data Type:",isprime);

let zero=null; //Null Data Type
console.log("Null Data Type:",zero);

let notdefined=undefined; //Undefined Data Type
console.log("Undefined Data Type:",notdefined);


const person={
    firstname:"John", //Key Value Pairs
    lastname:"Doe",
    age:21
};

console.log(person.firstname);

//Array in JvaScript
const cars=["BMW","Volvo","Saab"];  //Array Data Type

console.log(cars);//printing the array
//Accessing the array elements
console.log(cars[0]);
console.log(cars[5]);

for (let i=0;i<cars.length;i++){  //printing the values using for loop
    console.log(cars[i]);
}


//const date=new Date("2026-07-08");
const date=new Date();
console.log(date);



 


