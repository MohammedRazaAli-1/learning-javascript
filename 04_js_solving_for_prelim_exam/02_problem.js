// Demonstrate JavaScript local and global variables with suitable 
//  example 

// local variable : 

function local_variable(){
    let num1 = 10;
    console.log(num1);
}
local_variable()
// console.log(num1); num 1 is local variable so it is not accessible only inside function 

let num2 = 20;
function global_varialbe(){
    console.log(num2);
}
console.log(num2);
global_varialbe()