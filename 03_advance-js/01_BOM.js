//console.log(window); // window is a main browser

//console.log(this); // this is refered as window

// window === this is ture in browser console

// all the below  code only work in browser not in terminal
alert("hello"); // used to display alert message (read only)

let name = prompt("enter your name :");
console.log(name);
// with the help of prompt we can get input from user va pop ups

let ok = confirm("are you sure ");
console.log(ok);
// used to get confirmation if user clicked ok on pop up then it gives true and if user clicked caancel then it gives false .
// (it alsways gives unswer in boolean - true and false )

console.log(location.href);
// it returns url of current opened webpage

location.href = ""; // it directly redirect us to given path of webpage

location.reload(); // it reloads current web browser page

history.back(); // it used to go back (previous) state of our page .
//ex: in yt if we do back then it will keep us on previous watched or searched page
//
history.forward(); // it is used to move forward from prev page to next page we recently visited

console.log(navigator.userAgent);
console.log(navigator.language); // it gives information about navigator.
// navigator means a browser who navigates us from one url to nother

console.log(screen.height); // gives height of screen in px
console.log(screen.width); // gives width of screen  in px

setTimeout(() => {
  console.log("it will run after 3 second ...");
}, 3000);
// with the help of setTimeout we can specify after how many miliseconds our code will execute
//

let a = setInterval(() => {
  console.log("it will run repeatedly again after 3 second ...");
}, 3000);
// use setInterval we canrun code repeatedly after some secific time
clearInterval(a); // with he help of clear interval we can stop set interval execution
