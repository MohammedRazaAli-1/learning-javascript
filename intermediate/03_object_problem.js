/*
🟩 POWERFUL OBJECT CODING PROBLEM
📌 PROBLEM STATEMENT (READ CAREFULLY)

You are building a Student Result Management System.

You are given an array of student objects.
Each student has:

id

name

marks (object containing subject-wise marks)

attendance (percentage)

🔹 GIVEN DATA
const students = [
  {
    id: 1,
    name: "Ali",
    marks: { math: 80, science: 70, english: 75 },
    attendance: 85
  },
  {
    id: 2,
    name: "Ahmed",
    marks: { math: 30, science: 40, english: 35 },
    attendance: 60
  },
  {
    id: 3,
    name: "Raza",
    marks: { math: 90, science: 88, english: 92 },
    attendance: 95
  },
  {
    id: 4,
    name: "Zaid",
    marks: { math: 50, science: 45, english: 55 },
    attendance: 70
  }
];

🎯 YOUR TASKS (ALL IN ONE PROBLEM)
1️⃣ Calculate total marks of each student

(Add all subjects)

2️⃣ Calculate percentage of each student

(Assume each subject is out of 100)

3️⃣ Add two new properties to each student object:

total

percentage

4️⃣ Determine result status:

Pass if:

all subjects ≥ 40

attendance ≥ 75

Else → Fail

Add new property: result

5️⃣ Find the topper student (highest percentage)
6️⃣ Create a new array of passed students only
7️⃣ Calculate average class percentage
8️⃣ Print final report in this format:
Name: Ali
Total: 225
Percentage: 75
Result: Pass
------------------

🚫 RULES (VERY IMPORTANT)

❌ Do NOT modify original marks object

❌ Do NOT hardcode subject names

✅ Use:

for...in for object

map, filter, reduce where appropriate

Functions for logic

*/

const students = [
  {
    id: 1,
    name: "Ali",
    marks: { math: 80, science: 70, english: 75 },
    attendance: 85,
  },
  {
    id: 2,
    name: "Ahmed",
    marks: { math: 30, science: 40, english: 35 },
    attendance: 60,
  },
  {
    id: 3,
    name: "Raza",
    marks: { math: 90, science: 88, english: 92 },
    attendance: 95,
  },
  {
    id: 4,
    name: "Zaid",
    marks: { math: 50, science: 45, english: 55 },
    attendance: 70,
  },
  {
    id: 5,
    name: "tushar",
    marks: { math: 70, science: 80, english: 95 },
    attendance: 85,
  },
  {
    id: 6,
    name: "omkar",
    marks: { math: 70, science: 60, english: 85 },
    attendance: 65,
  },
  {
    id: 7,
    name: "zameer",
    marks: { math: 90, science: 50, english: 70 },
    attendance: 75,
  },
];

// Calculate Total marks of Each Student

let calc = [];

for (let i = 0; i < students.length; i++) {
  let math = students[i].marks.math;
  let sci = students[i].marks.science;
  let eng = students[i].marks.english;
  let sum = math + sci + eng;
  calc.push(sum);
}
for (i in calc) {
  console.log(`total sum of marks of ${students[i].name} is : ${calc[i]}`);
}

// calculate Percentage of Each Student:

let Percentage = [];
for (i of calc) {
  Percent = i / 3;
  Percentage.push(Percent);
}

for (i in Percentage) {
  console.log(`total Percentage of ${students[i].name} is : ${Percentage[i]}`);
}

// insert total marks and percentage as a properties in a object
for (i in students) {
  students[i].total_marks = calc[i];
  students[i].percentage = Percentage[i];
}

/*Determine result status:

Pass if:

all subjects ≥ 40

attendance ≥ 75

Else → Fail*/

for (i in students) {
  if (
    students[i].marks.english > 40 &&
    students[i].marks.math > 40 &&
    students[i].marks.science > 40 &&
    students[i].attendance >= 75
  ) {
    students[i].result_is = "pass";
  } else {
    students[i].result_is = "fail";
  }
}
console.log(students);

// Find the topper student (highest percentage)
let high = 0;
let name = "";
for (i in students) {
  if (students[i].percentage > high) {
    high = students[i].percentage;
    name = students[i].name;
  }
}
console.log(`topper Student is ${name} with percentage : ${high}`);

//6️⃣Create a new array of passed students only
let passed_student = [];
for (i of students) {
  if (i.result_is == "pass") {
    let temp_name = i.name;
    passed_student.push(temp_name);
  }
}
console.log(passed_student);

//Calculate average class percentage
let perc_avg = 0;
for (i of students) {
  let timepass = Number(i.percentage);
  perc_avg += timepass;
}
console.log("average class Percentage is : " + perc_avg / 7);
