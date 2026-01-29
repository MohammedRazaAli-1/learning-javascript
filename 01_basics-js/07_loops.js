/* their are 3 types of loops in js :

for - initialization , incrementation and condition happen at same place , end it entry control loop ,
means condition is checked before entering into the block of code .

while - condition is written with while loop ,
initilization happens before and incrementation happens inside block of code

do while - here we runs code in do block then we checks coniditon,
and then d incrementation , it is exit control loop ,
means condition is checked after executing code

*/

//for example :
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while example :

let i = 1;
let no = 22;
while (i <= 50) {
  console.log(`${no} x ${i} = ` + no * i);
  i++;
}

// do while example :
let j = 1;
let no1 = 27;
do {
  console.log(`${no1} x ${j} = ` + no * i);
  j++;
} while (j <= 10);

// for in loop :
// it is used to iterate on index of a array , string , object :
// it is not iterate on value of array , string , object :

let myarr = [1, 22, 23, 24, 5, 6];
for (i in myarr) {
  console.log(i);
}

// for of loop :
// it is used to iterate on values of array , string , object :
// it is not iterate on index like for in :
//
for (i of myarr) {
  console.log(i);
}
