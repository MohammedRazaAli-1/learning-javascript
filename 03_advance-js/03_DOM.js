// dom stands for document object model , which is used to interact with document of a webpage ,
// in DOM - the main thing is root which we called it <HTML> tag in HTML
// with the help of dom we can interact with structure of wepage ,
// we can change srucutre , insert new elements , we can apply new style and we can specify actions based of user interaction
//  because of DOM we can create dynamic web pages
//
console.log(document); // it is entry art of DOM , in browser consle , we can access main root i.e. html tag of a webpage

// DOM vs DOM :
// BOM is a browser object model , it is used to navigate through 1 web page to another , and used to get timer control behaviour and to get information related to browser

//DOM tree structure :
// <html>
// <head>...</head>
// <body>...</body>
// </html>

// it is accessable to dom like tree :
// document
// └── html
//  └── head
//  ├── body
//
//
// Each elements of DOM tree becomes node :
// | Node Type      | Example         |
//| -------------- | --------------- |
//| Document node  | `document`      |
//| Element node   | `<div>`         |
//| Text node      | text inside tag |
//| Attribute node | `class`, `id`   |

//DOM elements selection :
// 1) select Element by ID
let a = document.getElementById("ID");

// 2) select Element by class
let b = document.getElementsByClassName("class");

// 3) tag name :
document.getElementByTagName("P");

//4) query selectors :

document.querySelector(".name");
// it is used to get classes and id , here the only  first  element we get in tree is targetted
// .i.e. - get targets first Element whose class is name

document.querySelectorAll(".name");
// it targets all the elements whose lassname is name

// eading and changing content of document node elements :
//
let mypara = document.get;
