// . Find Factorial Using Recursion 


function recrsiveFactorial(num){
    if(num ===0 || num ===1){
        return 1 ;
    }else{
        return num * recrsiveFactorial(num -1 )
    }
}
console.log(recrsiveFactorial(20));
