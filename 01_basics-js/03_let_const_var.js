

// their are 3 types of variable types : 

/*
 1) var 
 2) let
 3)const 


/*1) var : 

var veriables are accessed in globally and it is mutable.
if we declared var variable outside function then it is also accessable in the function. 
also if it is declared inside function then it will be accessable globally too,
and we can assign new value after declartation.
 */



/* 
2) let : 

let variables are block scoped mutable :  
means , if we declared let var globally then it will assessible on function,
but fuction scope can not change value of let variable.
and if we declared it on locally then it will not accessable globally , it becomes scope level . 
we change it globally if it declred globally ,
*/

/* const : 

 const variable are block scoped and immutable : 
scoping is same like let , if declared globally accessable everywhere , 
if declared locally not accessable outside function ,
but , we can not change or modify value of const variable after initialization 
*/






// var is function-scoped and can be re-declared.

var number1 = 10;
console.log(number1);
function funct_name(){

    var number1 = 20;
    console.log(number1);
}
funct_name();
console.log(number1);

// let is block-scoped and cannot be re-declared in the same scope.

let number2 = 10;
console.log(number2)
function myfunct1(){
   let number2 = 20 
    console.log(number2)
    
}
myfunct1();
number2 = 30;
console.log(number2);


// const variable 

const number3 = 20;
console.log(number3);
function myfunct(){
    const number3 = 30;
    console.log(number3);
}
myfunct();

// number3 = 50; gives const assignment error 
console.log(number3);