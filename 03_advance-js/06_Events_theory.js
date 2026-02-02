/*
An event is an action or occurrence that happens in the browser.

Events are usually caused by:
User actions
Browser actions

Examples of events :

Clicking a button
Typing in input
Submitting a form
Page loading
Mouse moving
👉 JavaScript waits for events, then runs code.

how event works :
1) User action → (2) Event happens → (3)JS handles it

common types of events :

1)Mouse event :
click -> triggers when user click on something
dbclick -> when user double clicked on something
mouseover -> when cursor comes over any element
mouseout -> when cursor goes out form any element
mousemove -> when we moved mouse from 1 state to another

2) keyboard event :

keydown -> when key is pressed
keyup -> when releasing key after pressing (press out )

3) form event :
submit -> triggers when user click on submit the form
change -> it triggers when user changes the value of any thing e.g. dropdown , select etc
input -> it triggers when user type any char , delete any char , paste , cut [i.e. :- it triggers everytime when user do any chsnge in input ]

focus ->  it trigers when user clicks inside field or tap on the field .
blur -> it triggers when user clicks anywhere outside a field , and it usually used after focus
reset -> when user clicks on reset button

4) window events :

load -> triggers when wepage gets loaded
scroll -> triggers when we scroll the page
resize -> triggers when we try to resize the wepage


//
// 3 ways to add events (not a good):
1) inline event :
ex : <button onclick="alert('button clicked')"></button>

2) using dom selection (simple way) :
ex:
let btn = document.getElementById("btn");
btn.onclick = function(){
alert("button is clicked...")
};

3) by event listner (common +professional)
let btn = document.getElementById("btn);

btn.addEventListner("click" , function(){
alert("button clicked ...")
})

// event object :
it gives sets of functions nd methods regarding to events

btn.addEventListner("click" , function(e){
console.log(e)

// bubbling : this concept means multiple evets is applied then e.g. parent event and inside child event both ,
if we click on child event this first child event hapen , then parent event happen . it is bydefult case

//capturing : in this concept event propagation happens from parent 1st thrn child > >
to make event in capturing mode :  we user third para as true
let btn = document.getElementById("btn);

btn.addEventListner("click" , function(){
alert("button clicked ...")
} , true )

*/
