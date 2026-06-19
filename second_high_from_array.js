// Question : You are given an array arr, and your task is to find the second-highest element of this arr.
// Input	Output
// [5, 1, 2, 3, 4]	4
// [-1, -2, -3, -4, -5]	-2
// []	-Infinity
// [1]	-Infinity
// [1, 1, 1, 1, 1]	-Infinity


function second_highest(arr){
    let allEqual = arr.every((val)=> val === arr[0]);
    let removed_max = arr.filter(val => val !==Math.max(...arr));

    if(arr.length === 1 || arr === 0 ){
        console.log("-Infinity")
        return
    }
    else if(allEqual === true){
        console.log("-Infinity")
    }
    else{
        console.log(Math.max(...removed_max))
    }

}

let array = []
second_highest(array)
