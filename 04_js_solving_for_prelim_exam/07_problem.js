// Program to print prime numbers between two numbers

function printPrime(number1 , number2){
    for(let start = number1; start < number2; start ++){
        if(start < 2){
            continue
        }
        isprime = true;
        for(let i = 2; i<=Math.sqrt(start); i++){
            if(start % i ===0){
                isprime = false
                
            }
        }
        if(isprime){
            console.log(start);
            
        }
    }

}
console.log("prime number between 313 - 400");

printPrime(313 , 400);