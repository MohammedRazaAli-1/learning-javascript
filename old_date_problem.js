// Write a function minDate(dates) that takes an array of strings
//representing dates in the format "YYYY/MM/DD" and returns the earliest (minimum) date in the array.



function old_date(date){
    let older_date = 100000000
    let date_index;
    for(let i=0; i<date.length ; i++){
        if(Number(date[i].split('/').join("")) < older_date){
            older_date = Number(date[i].split('/').join(""));
            date_index = i;
        }        
    }
    console.log(date[date_index]);   

}

let dates = [ 
    "2023/01/01",
    "2023/02/14",
    "2023/03/17",
    "2023/04/05",
    "2023/05/01",
    "2022/04/16"
]
old_date(dates);

