/* their are 6 types of operators in javascript : 
1) arithematic operator :-
+ addition 
- substraction 
* multipliation 
/ division 
% modulus
** power  
 */

let num1 = 25;
let num2 = 22;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / 3);
console.log(num1 % 5);
console.log(num1 ** 4)

/* 
2) assignment operators : 
=  equal to
+= plus equal to
-= minus equal to
*= multiply  equal to
/= divide equal to
%= mod equal to
** = power equal to
*/ 

console.log(num1 += num2);
console.log(num1 -= num2);
console.log(num1  *= num2)
console.log(num1 /= num2)
console.log(num1 %= num2)
console.log(num1 **= 5)

/*
3) comparision operator : 
==  is both value equal 
=== is both value and type id equal 
< less than 
> greater than 
<= less or equal 
>= greater or equal 
!= not equals to 
!== not equal value and type 

*/
let new_num1 = 10;
let new_num2 = 22
let new_num3 = 10
let new_num4 = "22"

console.log(`number ${new_num1} is == to ${new_num2} : ` + num1 == num2) 
console.log(` number ${new_num1} is === to ${new_num2} : ` + num1 === num2) 
console.log(` number ${new_num1} is < to ${new_num2} : ` + num1 < num2) 
console.log(` number ${new_num1} is > to ${new_num2} : ` + num1 > num2) 
console.log(` number ${new_num1} is <= to ${new_num2} : ` + num1 <= num2) 
console.log(` number ${new_num1} is >= to ${new_num2} : ` + num1 >= num2) 
console.log(` number ${new_num1} is != to ${new_num2} : ` + num1 != num2) 
console.log(` number ${new_num1} is !== to ${new_num2} : ` + num1 !== num2) 

/*
4) increment and decrement operator : 

a++ post incrementt
++a pre increment 
a-- post decrement 
--a pre decrement 
*/
let indecrement = 10
console.log(indecrement++)
console.log(indecrement)
console.log(++indecrement)
console.log(indecrement--)
console.log(indecrement)
console.log(--indecrement)


/* 
5) logical operator : 
logical or ||  = at least on true 
logical and &&  = both need to be true 
 */
if (10 < 20 || 10>20){
    console.log("true .... ! ");
}

if (10 < 20 && 10> 20){
    console.log("true .... ! ");
}

/* 
6) ternary operator : 
conditon? true : false;

*/

(10<20)? console.log("10 < 20"): console.log("10 > 20");