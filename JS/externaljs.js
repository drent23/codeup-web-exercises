"use strict";

console.log("Hello this is the external JS ");

//alert - how do i first open window to show my user some info?
alert("This is an alert");
//can also use variables
var myName = "David";
alert("hey, this is " + myName + " talking to you.");
//can it run an expression
alert(2+2);
alert(true && false);
alert(2+2-5-(5*5);
//alert shoots out info to read

//confirm - true or false? (ok & cancel)
var likedLunch = confirm("How was your lunch?");
alert("You told me it was " + likedLunch + " that you liked lunch.");
//confirm equates user response "ok" to true and "cancel" to false, very hard coded



//prompt - can you write me something in response to what I asked in window?
var whatdidYoueat =

prompt("hey, I know it was " + likedLunch + " that you liked lunch, but what did you eat?");
alert("You told me that you had " + whatdidYoueat + " for lunch.");
