/*
PROBLEM 5: Coffee Machine (ABSTRACTION)
Task

User should only be able to call:

makeCoffee()

Internally:

heatWater()

grindBeans()

brew()

📌 User must NOT access internal methods.
*/

class Coffee {
  #heatwater = function () {
    console.log("water is hitting ... ");
  };
  #greendBeans = function () {
    console.log("beans are grnding ... ");
  };
  #brew = function () {
    console.log("breawing... ");
  };
  makeCoffee = function () {
    this.#heatwater();
    this.#greendBeans();
    this.#brew();
    console.log("your coffee is ready --");
  };
}

c1 = new Coffee();
c1.makeCoffee();
//c1.#heatwater(); private functions not accessable
//
/*
PROBLEM 6: Payment System (ABSTRACTION)
Task

Create a payment class where:

User calls pay(amount)

Internal steps are hidden
*/
class Payment {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
  #find_user = function () {
    console.log(`finding ` + this.name + "......");
    console.log(this.name + " is found ");
  };
  #paying = function () {
    console.log("sending " + this.amount + " to " + this.name + " .....");
  };
  make_payment = function () {
    this.#find_user();
    this.#paying();
    console.log("payment is successfully sended |");
  };
}

pay = new Payment("raza", 3000);
pay.make_payment();
// pay.#paying(); private method not used outside class
