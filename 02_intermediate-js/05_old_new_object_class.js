/*
PROBLEM 1: Student System (OLD WAY)
Task

Create a Student using constructor function.

Requirements

Properties: name, marks

Method: getResult() → Pass if marks ≥ 40

Rules

Use function Student()

Use this

Use new

📌 DO NOT use class
*/

function student(name, marks) {
  this.name = name;
  this.marks = marks;

  this.getresult = function () {
    if (this.marks >= 40) {
      console.log(this.name + "is passed ");
    }
  };
}

std1 = new student("raza", 98);
std1.getresult();

std2 = new student("tushar", 60);
std2.getresult();

/*
PROBLEM 2: Student System (ES6 WAY)
Task

Rewrite Problem 1 using class.

Requirements

Use constructor

Same output as old way

📌 Compare both versions after writing.
*/

class Student1 {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  getresult1 = function () {
    if (this.marks >= 40) {
      return this.name + " is passed ";
    } else {
      return this.name + " is failed ";
    }
  };
}
let raza = new Student1("raza", 45);
console.log(raza.getresult1());
