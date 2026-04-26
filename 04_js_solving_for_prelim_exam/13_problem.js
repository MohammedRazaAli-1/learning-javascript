// program to check if the string is palindrome or not 

let mystr = "abba";
let newstr = mystr.split('').reverse().join('');



if(mystr === newstr){
    console.log(`${mystr} string is palindrome`);
    
}else{
    console.log(`${mystr} is not a palindrome`);
    
}
