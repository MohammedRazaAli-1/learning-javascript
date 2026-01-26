// their are mainly 3 types of function in javascript : 

/*
 1) normal function :

 function myname(){
    console.log("Mohammad raza ...!");
}

myname()


2) function expression : means a function is treated as expression by storing function in variable 

let myfunction = function(){
    console.log("Mohammad raza ...!");
}

myfunction()


3) arrow functions :- it is a way to write function using arrow come in es6 version : 

let myfunction= () =>{console.log("mohammad raza...!");}
myfunction()

*/ 


// function with argument : 
/*
function myname(a){
    console.log("hello " +a);
}
myname("raza");
*/


// default argument : 

/*
function myname( a = "raza"){
    console.log("hello "+a);
}
myname()
myname("eliyas")
*/


// function with return type : 
/*
function myname2(a ,b){
    return( a + b );
}
let b = myname2(10,20);
console.log(b)
*/


// Callback function

/*
function decorate(func){
    console.log("i am header ");
    func()
    console.log("i am footer");
}

function myfun(){
    console.log("i am a min function ...");
}
decorate(myfun)
*/


//iife - a function is immidiately invoked after creating a function :
/* 
(function() {console.log("IIFE")})();
(function(a,b){console.log(a+b)})(10,40);
(function(){})()
*/


//hoisting - a function is called before creating 
/*
myname()

function myname(){
    console.log("hello raza")
}
    */