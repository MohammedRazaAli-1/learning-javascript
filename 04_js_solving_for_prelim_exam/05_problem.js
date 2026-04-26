// program to check if a number is prime or not


//1) functional approach : 
function checkPrime(number){
    if(number <=1)return false

    for(let i=2; i<= Math.sqrt(number); i++){
        if( number % i ===0)return false

    }
    return true
}
console.log(checkPrime(11));
//2)  direct approach : 
let number1 = 11;
for(let i = 2; i <=Math.sqrt(number1);i++){
    if(number1 % i ===0){
        console.log("not prime");
        
    }else{
        console.log("prime number");
    }
}


// more optimized approach : 

function checkPrime2(number){
    if(number <2)return false;
    
    for(let i = 2; i<=Math.sqrt(number); i+2){
        if(number % i ===0){
            return false
        }

    }
    return true
}
console.log(checkPrime2(347569347852394777));


