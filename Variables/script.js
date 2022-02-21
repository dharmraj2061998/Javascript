// Upto ES5 we had been using var to define variable.
var a = 8
var c = 'rajesh'
console.log(a)
console.log(c)
// But now in ES6 we are using const and let instead of var.
// and var is also in the use.
let b = 12
console.log(b)
// for storing variable data.
const k = 13
console.log(k)
/* for storing constant value. This value cant be changed.
if you declare variable direct as */
g = 7
console.log(g)
/* then its default come under let.
 any variable name can only start with $,_ and letter.
 if you start variable name with special character, number then
 it will throw error */
digit1 = 12
console.log(digit1)
/* rules of variable declaration are only associated with starting 
of variable name you can add anything after initialization of variable
name  but cant add space in variable name.*/
$abi = 1
console.log($abi)
/*  There are some reserverd keywords in javascript you cant use
 reserverd keywords to define variable as variable name*/
var x
console.log(x)
/* this will give output undefine because you havent assigned any 
 value to x */
