// A Promise is an object that represents a value which will be available:
// A promise has 3 states:

//1)  pending => 	still working
//2)  fulfilled =>	success
//3) rejected	=> failure

// promise when case is success :
/*let p = new Promise(function (resolve, reject) {
  resolve("success");
});

p.then(function (result) {
  console.log(result);
});*/

// promise when case in failed..
/*
let q = new Promise(function (resolve, reject) {
  reject("failed...");
});
q.catch(function (result) {
  console.log(result);
});*/

//.then() → handles success
//.catch() → handles error

// Promise to check age validation :
/*
let age = 17;

let check_age = new Promise(function (resolve, reject) {
  if (age > 18) {
    resolve("you are eligible ...");
  } else {
    reject("you are not eligible... ");
  }
});

check_age
  .then(function (age) {
    console.log(age);
  })
  .catch(function (age) {
    console.log(age);
  }); */

// promises chaining :

// let number = 200;
// let r = new Promise((resolve, reject) => {
//   if (number > 5) {
//     console.log("adding 10 : ");
//     resolve(number + 10);
//   } else {
//     console.log("adding 100" + number + 100);
//     reject(number + 100);
//   }
// });

// r.then(function (mypara) {
//   console.log("multiplying by 2 : ");
//   return mypara * 2;
// })
//   .then((mypara) => {
//     console.log("substracting by 10 ");
//     return mypara - 10;
//   })
//   .then(function (mypara) {
//     console.log(mypara);
//   })
//   .catch(function (mypara) {
//     console.log(mypara);
//     console.log("multiplying by 3 : " + mypara * 3);
//     throw mypara * 3;
//   })
//   .catch(function (mypara) {
//     console.log(mypara);
//     console.log("dividing  by 6 : " + mypara / 6);
//     throw mypara / 6;
//   })
//   .catch((mypara) => {
//     console.log(mypara);
//   });
