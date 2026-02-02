/*
PROBLEM 3: Bank Account (ENCAPSULATION – OLD WAY)
Task

Create a bank account system where:

Balance is hidden

Only accessible using methods

Requirements

Constructor function

deposit(amount)

getBalance()

📌 Balance should NOT be directly accessible.

🔹 PROBLEM 4: Bank Account (ENCAPSULATION – ES6)
Task

Rewrite Problem 3 using:

class

private field #balance

*/

//old way :
function mybalance(amount) {
  let myamount = amount; // by storing amount as a variable mybalance it becames private no we can not access it outside class
  //this.amount = amount;

  this.deposite = function (amount) {
    myamount += amount;
    //this.amount += amount not private
  };
  this.getBalance = function () {
    console.log("your balance is " + myamount); //this.amount , not private );
  };
}

myaccount = new mybalance(2000);
myaccount.deposite(1200);
myaccount.getBalance();
console.log(myaccount.amount);

// ES6 way
class mybalance1 {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }
  deposite = function (amount) {
    this.#amount += amount;
  };
  getBalance = function () {
    console.log("your balance is - " + this.#amount);
  };
}

let myobj = new mybalance1(3000);
myobj.deposite(2345);
myobj.getBalance();
//console.log(myobj.#amount); not accessible
