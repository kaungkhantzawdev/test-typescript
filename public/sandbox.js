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
//Dom
const aTag = document.querySelector('a');
const form = document.querySelector('.new-item-form');
const toSelect = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(toSelect.value, toFrom.value, details.value, amount.valueAsNumber);
});
//class
// class Invoice{
//     // client: string;
//     // detail: string;
//     // amount: number;
//     // constructor( a: string, b:string, c:number){
//     //     this.client = a
//     //     this.detail = b
//     //     this.amount = c
//     // }
//     //access modifier
//     constructor(
//         readonly client: string,
//         private detail: string,
//         public amount: number
//     ){}
//     format(){
//         return `${this.client} owe $ ${this.amount} and detail is ${this.detail}`
//     }
// }
import { Invoice } from "./classes/Invoice.js";
const InvOne = new Invoice('hello', 'man', 300);
const InvTwo = new Invoice('hihi', 'world', 400);
let invoices = [];
invoices.push(InvOne);
invoices.push(InvTwo);
console.log(invoices);
const me = {
    name: "mg mg",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
console.log(me);
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('rio-one', 'web dev', 300);
docTwo = new Payment('rio-two', 'backend dev', 300);
let doc = [];
doc.push(docOne);
doc.push(docTwo);
console.log(doc);
//generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let addOne = addUID({ name: 'generics', age: 50 });
console.log(addOne.name);
const addTwo = {
    uid: 2,
    data: { name: 'add Two', age: 40 }
};
const addThree = {
    uid: 4,
    data: ['hihi', 'hlkjf']
};
console.log(addTwo, addThree);
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
})(ResourceType || (ResourceType = {}));
const addfour = {
    uid: 4,
    reource: ResourceType.Author,
    data: ['hihi', 'hlkjf']
};
//tuples
let defineData;
defineData = ['hello', 2];
console.log(defineData);
