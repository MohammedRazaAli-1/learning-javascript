
//  program to check an Armstrong number of three digits

// normoal implementation : 
let digit = 158;
let myarr = digit.toString().split('');
let power = myarr.length;
let add = 0;
for(let i = 0; i< myarr.length; i++){
    add += Math.pow(Number(myarr[i]) , power);
}
if(digit === add){
    console.log(digit ,  "number is armstrong");   
}
else{
    console.log(`${digit} number is not armstrong `);   
}


// functional implementation 

function checkArmstrong(number){
    let numarray = number.toString().split('');
    let power = numarray.length;
    let sum = 0;
    for(let i = 0; i<numarray.length; i++){
        sum += Math.pow(Number(numarray[i]) , power);
    }
    if(number === sum){
        return true;
    }else{
        return false
    }
}

console.log(checkArmstrong(153));

