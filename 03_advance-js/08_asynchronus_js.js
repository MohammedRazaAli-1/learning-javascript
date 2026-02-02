// function a() {
//   console.log("a called ");
// }
// function b() {
//   console.log("b called ");
// }

// a();
// b();

// function c() {
//   d();
// }
// function d() {
//   e();
// }

// function e() {
//   console.log("hellow word ");
// }

// c();

/*

//async js


*/

// let a = function () {
//   console.log("i aam a ");
// };

// let b = function () {
//   setTimeout(() => {
//     console.log("i am b ");
//   }, 2000);
// };

// let c = function () {
//   console.log(" iam c ");
// };

// a();
// b();
// c();

// let d = function () {
//   let cnt = 0;
//   let interval = setInterval(() => {
//     console.log("i will run on every 1 second ....");
//     cnt++;
//     console.log(cnt);
//     if (cnt == 5) {
//       clearInterval(interval);
//     }
//   }, 1000);
// };

// d();
//
//
/*
event : when we are using settimeout or setinterval then in behind there is an event from browser api is starting and it is executing after time happens */

// note : async code only run after all sync code finishes their execution , no matter time is happen , but it always executes sync code first
//
//

function one() {
  console.log("one");
}
function two() {
  console.log("two");
}
function three() {
  setTimeout(function () {
    console.log("three");
  }, 500);
}
function four() {
  setTimeout(function () {
    console.log("four");
  }, 499.9);
}

function five() {
  setTimeout(() => {
    console.log("five");
  }, 0);
}

// one();
// two();
// three();
// four();
// five();

//

// 10 , 20  -> 10**2  , 20** 2 -> 300

function power(a, b, callback) {
  let mya = a ** 2;
  let myb = b ** 2;
  callback(mya, myb);
}

function sum(x, y) {
  console.log("Sum is:", x + y);
}

power(10, 20, sum);
