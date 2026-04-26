// . Calculating the number of spaces present in the text 
let string = "hey i am raza how are you ?   ";
let spaces = 0;
for(let i =0; i<string.length; i++){
    if(string[i]===' '){
        spaces += 1;
    }
}
console.log(`total spaces present is string are : ${spaces}`);
