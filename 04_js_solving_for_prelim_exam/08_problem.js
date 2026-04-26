//  program to find the factorial of a number


function claculateFactorial(number){
    let total = 1;
    for(let i = 2; i <=20; i++){
        total *=i;
    }
    console.log(`factorial of ${number} is ${total}`)
}
claculateFactorial(20)