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
for(let i = 0; i <10; i++){
    console.log(i);
}

// while example : 

let i = 1;
let no = 22;
while(i <=50){
    console.log(`${no} x ${i} = ` + no *i);
    i++;
}

// do while example : 
let j = 1;
let no1 = 27;
do{
 console.log(`${no1} x ${j} = ` + no *i);
 j++;
}while(j<=10);

