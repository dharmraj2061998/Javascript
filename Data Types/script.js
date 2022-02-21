/* Data types 
1) String
2) Number
3) Boolean 
4) Array
5) Object
6) Undefine*/

// 1)String =
console.log('string')
x = 'jeevan'
y = 'Joshi'
//String data type is none other than text which enclosed in "" or ''.
console.log(x)
console.log(y)
//2)Number
console.log('Number')
j = 12
c = 1.2
console.log(j)
console.log(c)
// Numbers are integers, decimals which not required to be enclose in any
//quotes
//Boolean
console.log('Boolean')
v = 5 > 3
console.log(v)
// Boolean is value comes in true or false only its a conditional data type.
console.log('Array')
let u = ['virendra', 5, true]
console.log(u)
// Array is data type where can you store multiple vatlues of multiple data types.
// You can access them and retrive them
console.log('Object')
let i = {
  father: 'Prakash',
  age: 63,
}
console.log(i)
// Object is collection of data of multiple data types in the form of key:value.

console.log('Undefined')
let o
console.log(o)
// Undefined is data type in itself whre we only declared variable and not given any
//value.

// For accessing the type of data type we have an function that is type of.

let m = typeof 10
console.log(m)
console.log(typeof 'jeevan')

console.log(`hello ${x}`)
