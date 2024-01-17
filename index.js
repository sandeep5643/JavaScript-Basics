// line below is used to print on the console window;
console.log('Hello Sandeep kumar How are you today');
console.log('Hello sandeep kumar');

// javascript ke andar ham kisi bhi type ka data store kara sakte hai;
let a = 5;
let b = 7;
console.log(a-b);

let firstName = "sandeep";
console.log(firstName);

// var keyword ke sath variable re-declearing ho sakta hai lekin let or const keyword ke sath nahi ho sakta hai;
var carName = "volume";
var carName = "volume";
console.log(carName);


let secondName = "volume";
// let secondName;
console.log(secondName);

const thirdName = "volume";
// const thirdName;
console.log(thirdName);

// Redeclaring a variable with let, in another block, IS allowed:
{
    let a = 5;
    console.log(a);
}

{
    let a = 5;
    console.log(a);
}

// Declaring a variable with const is similar to let when it comes to Block Scope The c declared in the block, in this example, is not the same as the c declared outside the block;
const c = 5;
console.log(a);

{
    const c = 5;
    console.log(a);
}

// operator;
let d = 10;
let e = 20;
let z = d + e;
console.log(z);

let f = 10;
let g = 20;
let h = f ** g;
console.log(h);

//pre-post increment decrement operator;
let j = 10;
console.log(--j);

//assignment operator;
let k = 7;
k+=6;
console.log(k);

console.log(5!=3);

//ternary ya conditional operator;
let age = 15;
let status = (age >= 18) ? 'Yes' : 'No';
console.log(status);

//bitwise operator;
let n = 2;
let m = 3;
console.log(n & m);

//Dynamic typeing;
let firsttName = 'sandeep'
console.log(firstName);

firstName = 6
console.log(firstName);

//object;
let person = {
    firstName : 'sandeep',
    lastName : 'kumar',
    age : 22,
    emailId : 'sandeekumar80832718@gmail.com'
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.emailId);  

//Arrays;
let names = ['sandeep','love','Rahul',9]
console.log(names [1]);

//if statement;
var x = 15;
if (x > 10) {
    console.log("x is greater");
}

//This is print because value is same;
var x = 100;
var y = '100';
if (x == y) {
    console.log("yes x is Equal")
}

// This is not print because value is same and data type is different;
var x = 100;
var y = "100";
if (x === y) {
    console.log("yes x is Equal")
}

// if else statemnet;
var x = 15;
if (x > 30) {
    console.log("x is write");
} else {
    console.log("x is wrong");
}

// else if statement;
var time = 20;
if (time < 20) {
    console.log("GM")
}else if (time < 30) {
    console.log("GA");
}else {
    console.log("GE");
}

var per = 55;
if (per >= 80 && per <= 100) {
    console.log("Merit");
}else if (per >= 60 && per < 80) {
    console.log("1st devision");
}else if (per >= 40 && per < 60) {
    console.log("2nd devision");
}else if (per >= 30 && per < 40) {
    console.log("3rd devision");
}else {
    console.log("fail");
}

var marks = 70;
if (marks >= 90) {
    console.log('A');
}
else if (marks >= 80) {
    console.log('B');
}
else if (marks >= 70) {
    console.log('C');
}
else {
    console.log('D');
}

// switch case statement;
let num = 2;
switch (num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('E');
}

let day = 7;
switch(day) {
    case 1: console.log('Monday');
    break;
    case 2: console.log('Tuesday');
    break;
    case 3: console.log('Wednesday');
    break;
    case 4: console.log('Thursday');
    break;
    case 5: console.log('Friday');
    break;
    case 6: console.log('Saturday');
    break;
    case 7: console.log('Sunday');
    break;
    default: console.log('No any one Date');
}

// Nested if statement;
let id = "sandeekumar80832718@gmail.com"
let pass = "12345678"

if (id === "sandeekumar80832718@gmail.com") {
     if (pass === "12345678") {
        console.log('User Authorised');
     }else {
        console.log('User pass incorrect');
     }
} else {
    console.log('User Name incorrect');
}

// Loop-Jab bhi hamko repetation of same task karna ho to ham loop ka use karet hai;
//for loop;
for (i = 0; i < 6; i++) {
    console.log(i);
}

for (i = 0; i<=10; i=i+1) {
    console.log("sandeep" + i);
}

for (i = 1; i <= 100; i++) {
    console.log(i + "<br/>");
}

for (i = 100; i >= 1; i--) {
    console.log(i + "<br/>");
}

var x = 5;
for (i = 1; i <= 10; i++) {
    console.log(i * x + "<br/>");
}

var y = 9;
for(i = 1; i <= 10; i++) {
   console.log(i * y + "<br/>");
}


// continue statement;
for(var i=0; i<5; i++)
{
    if(i==3)
{
    continue;
}
   console.log(i);
} 


// while loop is exactly same as for loop but different between is syntax;
var nuh = 0;

while(nuh <= 10) {
    console.log(nuh);
    nuh++;
}

var nuh = 0;
while(nuh <= 50) {
    console.log(nuh + "<br/>");
    nuh++;
}

var nm = 2;
while (nm <= 10) {
    console.log(nm + "<br/>");
    nm = nm * 1;
}

// do while lopp ye loop one time execute karta hi karta hai;
let nuj = 1;

do {
    console.log(nuj);
    nuj++; 
} while(nuj < 10);

// for-in lopp;
//objects in for-in loop;
let animal = {
    animalName : "zebra",
    leg : 4
};

for(let key in animal){
    console.log(animal.key);
}

//Array in for-in loop;
let fnames = ["sandeep", "Neha", "Pintu", "Binit"];
for(let index in fnames){
    console.log(fnames[index]);
}

for(let index of fnames){
    console.log(fnames);
}