//  array is  a collection of datatypes

// // simple array :
// let myarr = [1, 2, 3, 4, 5];
// console.log(myarr);

// // empty array :
// let myarr2 = [];
// console.log(myarr2);

// // we can store diff type of data in array :
// let myarr3 = [1, "raza", true, null];
// console.log(myarr3);

// // access elements using index :
// console.log(myarr3[1]);
// console.log(myarr3[2]);

// //we can modify elements of array :

// myarr3[2] = false;
// console.log(myarr3);

// // we can find length ( no of elemnts in an array
// console.log(myarr3.length);

// // travers on array using loops :
//let myarr4 = [11, 2, 3, 4, 5, 6, 17, 1, 9, 10, 12, 24, 56, 78, 98, 65, 32];

// for (i in myarr4) {
//   console.log(i);
// }
// for (i = 0; i < myarr4.length; i++) {
//   console.log(myarr4[i]);
// }

// find maximum element of array :
// let max = myarr4[0];
// for (i = 0; i < myarr4.length; i++) {
//   if (myarr4[i] > max) {
//     max = myarr4[i];
//   }
// }
// console.log("maximum number is : " + max);

// find minimum element of array :

// let min = myarr4[0];
// for (i in myarr4) {
//   if (myarr4[i] < min) {
//     min = myarr4[i];
//   }
// }
// console.log(min);

// search any element from array :

// let elem = 17;
// for (i in myarr4) {
//   if (myarr4[i] == elem) {
//     console.log(
//       ` ${elem} is present in array and found at index : ${Number(i) + 1}`,
//     );
//   }
// }

// count total no. of even and odd element :
// even = odd = 0;

// for (i in myarr4) {
//   if (i % 2 == 0) {
//     even++;
//   } else if (i % 2 != 0) {
//     odd++;
//   }
// }
// console.log("total even number : " + even);
// console.log("total odd number : " + odd);

// array methods :
/*
push () = to insert at end
pop() = removes from end we do not remove any elem by value
shift() = remove from start
unshift() = insert at beginniing .

we can insert multi val in array in push and unshift.
in unshift if we give (106 , 107) then 107 goes first and then 106 and output will be 106->107
*/

// myarr4.push(101);
// myarr4.push(102, 103, 104);
// console.log("pushed 101 ,102, 103, 104");
// console.log(myarr4);
// myarr4.pop();
// console.log(myarr4);
// myarr4.pop(101);
// console.log(myarr4);
// myarr4.unshift(105);
// console.log(myarr4);
// myarr4.unshift(106, 107);
// console.log(myarr4);
// myarr4.shift();
// console.log(myarr4);

// /*
// indexOf - it gives index number of a given element , if not present then return -1
// includes
// */
// console.log(myarr4.indexOf(555)); //-1
// console.log(myarr4.indexOf(5)); // index number
// console.log(myarr4.includes(555)); // false - not present
// console.log(myarr4.includes(5)); // true - present

/*
special loop for iterative data type :
forEach() :- it is used to iterate on array only
map() :- it also iterates on all elem of array and directly changes its value to new value
( i.e. it visit on every elem and assigns new value of all elem iteratively */

// myarr4.forEach((i = 0) => {
//   console.log(i + 1);
// });

// map used to perform operation on array element and returns a new array

// let newarray = myarr4.map((i) => {
//   return i * 2;
// });
// console.log(myarr4);
// console.log(newarray);

// filters element of array based on condition

//let newarray2 = myarr4.filter((i) => i % 2 == 0);

//reduce() combines all elements into one value.
// let nums = [10, 20, 30];
// let sum = nums.reduce((total, n) => total + n, 0);
//

let array123 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array123);

// let two_arr = array123.forEach(function (i) {
//   console.log(i * i);
// });

// array123.forEach(function (i) {
//   console.log(i * i);
// });

// console.log(array123);

// array123.map(function (i) {
//   console.log(i * i);
// });
// console.log(array123);

array123.reduce(function (i) {
  return i * i;
});
console.log(array123);

// find() returns first element that matches condition.
//   some() checks if any one element satisfies condition.
// every() checks if all elements satisfy condition.
