"use strict";
let hello = "hello ";
const hi = (x) => {
    return x + Math.PI;
};
console.log(hello, hi('hello'));
let fruits = ['apple', 'orange'];
fruits.push('mango');
fruits[0] = 'red';
console.log(fruits);
let obj = {
    name: "mg mg",
    age: 30
};
// obj.skills = ['html', 'css']
console.log(obj);
// unique typescript
let character;
let age;
let isLoggedin;
character = 'mgmg';
age = 30;
isLoggedin = false;
console.log(character, age, isLoggedin);
// array
let arr = [];
arr.push('hello');
arr.push(30);
arr.push(true);
console.log(arr);
let uid;
uid = 'mgmg';
console.log(uid);
//object
let objTest;
objTest = {
    name: 'helo',
    age: 30
};
console.log(objTest);
let objDeclare;
objDeclare = {
    age: 40,
    name: 'hello'
};
console.log(objDeclare);
//any ( dynamic )
let rio;
rio = false;
console.log(rio);
let arrAny = [];
arrAny.push('hello hi');
arrAny.push(true);
console.log(arrAny);
let objAny;
objAny = {
    name: true,
    age: 'hello age'
};
console.log(objAny);
//function
let great;
great = () => {
    console.log('I am great function');
};
great();
const add = (a, b, c = 9) => {
    console.log(a * b, c);
};
add(3, 4, 'hello man');
const greatingS = (name, item) => {
    console.log(`${name} is ${item}`);
};
const greating = (user) => {
    console.log(`${user.name} is ${user.uid}`);
};
// function singature
let sing;
sing = (one, two) => {
    console.log(`${one} is and ${two}`);
};
sing(3, 5);
let signNumber;
signNumber = (abc, anyw, c) => {
    if (c === 'add') {
        return abc + anyw;
    }
    else {
        return abc - anyw;
    }
};
console.log(signNumber(2, 5, 'close'));
let objSign;
objSign = (rio) => {
    return `${rio.name} and ${rio.age}`;
};
console.log(objSign({ name: 'hello', age: 30 }));
