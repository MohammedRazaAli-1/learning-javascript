//  Write a program that demonstrates all JavaScript iterative statements

// 1) for loop 
for(let i =0; i<10; i++){
    console.log(i)
}

// while loop 
console.log( "\n while loop \n");
let j = 0;
while(j<10){
    console.log(j);
    j++;
}

// do-while loop 
console.log( "\n do while loop \n");
let k =0;
do{
    console.log(k);
    k++;
}while(k <10);


// for in 
console.log( "\n for in  loop \n");
let myarr= [1,2,3,4,5];
for( i in myarr){
    console.log(i);
} 

let myarr2 = [6,7,8,9,10];
console.log( "\n for of  loop \n");
for( i of myarr2){
    console.log(i);
}

