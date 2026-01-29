// let obj = {
//   name: "Ali",
// };

// console.log(obj.toString());
// console.log(obj.__proto__);
// function Person(name) {
//   this.name = name;
// }

// console.log(Person.prototype);
//
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log("Hello " + this.name);
// };
// p1 = new Person("raza");
// p1.greet();

/*
Problem 1: Method Sharing

Create a constructor function User(name).

Requirements:

Store name

Add a method sayHello() using prototype

Create two users

Call sayHello() for both

👉 Goal: Understand method sharing
*/

function User(name) {
  this.myname = name;
}
User.prototype.sayHello = function () {
  console.log("hello " + this.myname);
};
user1 = new User("raza");
user1.sayHello();

user2 = new User("ali");
user2.sayHello();

if (user1.__proto__ === User.prototype) {
  console.log("both are same");
} else {
  console.log("both are not same ");
}

User.prototype.getName = function () {
  console.log("name is " + this.myname);
};

user2.getName();
console.log(user2.toString());
User.prototype.toString = function () {
  console.log(" converted into string : " + this.myname);
};
user2.toString();

/*
Problem 5: Two-Level Chain

Create:

Person(name)

Employee(name, salary)

Requirements:

Employee inherits from Person

Person has introduce()

Employee has getSalary()

Employee object should access both methods

👉 Goal: Prototype chain
*/

function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log("introducing  : " + this.name);
};

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}
Employee.prototype.getSalary = function () {
  console.log("your salary is " + this.salary);
};

// their is lots of more advance cocept present here , learn it in future ok
