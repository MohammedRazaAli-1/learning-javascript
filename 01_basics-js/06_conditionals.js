// if {} it executes when conditon is true 
// else if{} it executes when if is false and conditin in else if is true 
// else {} it executes when all conditions are false 
// switch conditions : when we have to check multiple fixed conditions 

let a = 10;
//if example : 
if(a<20){
    console.log( a + " is less than 20 ");
}

// if else example 
if(a <10){
    console.log(a + " is less than 10"); 
}
else{
    console.log("i am else part")

}

// if else-if else : 
if(a <10){
    console.log(" a is less than 10 ")
}else if(a > 10){
    console.log("a is greater than 10 ")
}
else{
    console.log("someting wrong happen here ...")
}

// switch case : 

// we write condition with switch and below write which case satisfies the condition : 

switch(a=10){
    case 5 : console.log("i am 5 ");
    case 10 : console.log("i am 10 "); 
}

switch(true){
    case 10>20: console.log("10 less than 20 ");
    case 30<20: console.log("i am case 2");
    default : console.log("i am final case ");
}
