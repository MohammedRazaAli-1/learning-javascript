// class is a real world entity and it is blueprint for object
// object ia a any thing and it is an instance of a class

let myinfo = {
  name: "mhammad raza",
  age: 21,
  education: "MCA",
};

// acessing using . notation
console.log(myinfo.name);
console.log(myinfo.age);

// accessing using key name :
//
console.log(myinfo["name"]);

// modifying values of a object :
myinfo.name = "mohammed raza ali ";
console.log(myinfo);

// interting new record (key & vlaue ) in a class :

myinfo.location = "chalisgaon";
console.log(myinfo);

// to delete record from class :

delete myinfo.location;
console.log(myinfo);

// we can pass array and function as a value for a object :
// example function as a value :

myinfo.greet = function () {
  return "hello " + this.name;
};
console.log(myinfo);
console.log(myinfo.greet());

// example of array as a value :
//
myinfo.marks = [60, 69, 78, 87, 56];
console.log(myinfo.marks[3]);

// looping object :

for (i in myinfo) {
  console.log(`${i} :-> ${myinfo[i]}`);
}

// nested object :
//
let myobj2 = {
  name: "raza",
  address: {
    address1: "pune",
    address2: "nashik",
    address3: "chalisgaon",
  },
};

console.log(myobj2);
console.log(myobj2.address.address1);

// array of object :
//
let myarray = [
  { name1: "raza", age1: 21, education1: "MCA" },
  { name2: "eliyas", age2: 23, education2: "12th" },
  { name3: "azeem", age3: 21, education3: "b. voc" },
];
console.log(myarray);
console.log(myarray[0]);

// operations on array :

let marks = {
  name1: "raza",
  marks1: 70,
  name2: "tushar",
  marks2: 69,
  name3: "swarnim",
  marks3: 65,
  name4: "chaitanya",
  marks4: 34,
};

// we can use filter , map and find properties on object :

// object destrcutor :  means extracting values of object into variable :

let marks2 = {
  name1: "raza",
  marks1: 70,
  name2: "tushar",
};
let { name1, marks1, name2 } = marks2;

console.log(name1); // raza

// built in object methods :
console.log(Object.keys(marks2)); // returns all keys of object in array
console.log(Object.values(marks2)); // returns all values of object in array
console.log(Object.entries(marks2)); // creates a array's of key and value pair
console.log("marks1" in marks2); // checks that given key exists in object or not are returns true and false
console.log(marks2.hasOwnProperty("marks1")); // checks that object has exist given property or not

let copy_marks2 = marks2; // it referencing same object in a memory
// so if we changed copy_marks2 value then marks2 value will also get changed
//

let copy = { ...marks2 }; // it create shallow copy of object , means another copy of object
// but not like copy_marks2 , it create copy of object in dfferent memory location
console.log(copy);

if (copy == marks2) {
  console.log("both are same ");
} else {
  console.log("both are not same ");
}
if (copy_marks2 == marks2) {
  console.log("both are same ");
} else {
  console.log("both are not same ");
}
