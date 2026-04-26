//  program to generate Fibonacci series up to n terms


function generateFibonacciSeries(n) {
let a = 0;
let b = 1;
let series = [];
for(let i = 0; i<n; i++){
    series.push(a);
    let next =a+b;
    a=b;
    b=next;
}
return series;
}

let fibseries = generateFibonacciSeries(15);
for(let i of fibseries){
    console.log(i);
    
}
