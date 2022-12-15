let hello = "hello ";

const hi = (x: string) => {
    return x + Math.PI;
}

console.log(hello, hi('hello'));

let fruits = ['apple', 'orange']
fruits.push('mango')
fruits[0] = 'red'

console.log(fruits)


let obj = {
    name: "mg mg",
    age: 30
}

obj.skills = ['html', 'css']

console.log(obj)



// unique typescript
let character: string;
let age : number;
let isLoggedin : boolean;

character = 'mgmg'
age = 30 
isLoggedin = false

console.log(character, age, isLoggedin)

// array

let arr: (string|number|boolean)[] = []
arr.push('hello')
arr.push(30)
arr.push(true)
console.log(arr)

let uid: string|boolean;
uid = 'mgmg'
console.log(uid)

//object

let objTest : object;
objTest = {
    name: 'helo',
    age: 30
}
console.log(objTest)

let objDeclare : {
    name: string,
    age: number
}

objDeclare = {
    age: 40,
    name: 'hello'
}

console.log(objDeclare)