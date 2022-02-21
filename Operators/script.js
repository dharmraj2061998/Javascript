let x
x = 10
// '=' sign is an assignment operator
let y = x
console.log(y)
x = x + 3
console.log(x)
x += 3 // x=x+3 and x+=3 is same
console.log(x)
//power
let u = 5
z = u ** 2
console.log(z)

a = 5
b = '5'
console.log(a + b)

//to increment value of variable or decrement of it

r = 1
r++
console.log(r)
r--
console.log(r)
// Comparison and Logical Operators
console.log('Equal to operator')
console.log("operator: '=='")
console.log('5 == 5')
console.log(5 == 5)
console.log('5 == 6')
console.log(5 == 6)
// This operator checks whether the two values are equal or not.
console.log('Equal value and Equal type')
console.log("operator: '==='")
console.log('5===5')
console.log(5 === 5)
console.log('5===6')
console.log(5 === 6)
console.log("5==='5'")
console.log(5 === '5')
// This operator checks the values and their type also.
console.log('Not equal to operator')
console.log("operator :'!='")
console.log('5!=6')
console.log(5 != 6)
console.log('6!=6')
console.log(6 != 6)
// This operator checks whether two values are not equal  or equal its
// just reverse works to equal to but the use is in same manner.
console.log('Not equal value and not equal type')
console.log("operator:'!=='")
console.log('5!==6')
console.log(5 !== 6)
console.log('6!==6')
console.log(6 !== 6)
console.log("5!=='6'")
console.log(5 !== '6')
console.log("5!=='5'")
console.log(5 !== '5')
// This operators checks whether two values are not equal to and their
//data types also.

console.log('Greater than')
console.log("operator:'>'")
console.log('8>5')
console.log(8 > 5)
console.log('5>11')
console.log(5 > 11)
// This operator checks whether the first value of condition is greater than
// second value or not and gives output in true or false
/*1) less than = 5<8 
  2) Greater than equal to = 5>=5
  3) Less than equal to = 8<=8 */
// Familier with this operators so not given examples.

/*Logical Operators 

1) and &&
  if two true conditions joined using and operator then it gives output true.
  and if any one or both conditions are false then it gives false.
2) Or ||
   if two falsy conditions joined using or operator then it gives output false.
   and if anyone of them are true or both are true then condition is true.
3) ! Not
    It used to change the output true to false and false to true.   