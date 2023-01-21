"use strick";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

//favorite color

var favColor = prompt("What's your favorite color?");

alert("" + favColor + " is my favorite color too!");

//movie rentals

alert("Welcome to Blockbuster where we have AS MANY copies of" +
    " WHATEVER movie you could possibly want WHENEVER you want it." +
    "  Who needs the Internet, right?!")
const pricePerday = 3;
var lmDays = prompt("How many days would you like to rent Little Mermaid?");
var lmTotal = lmDays * pricePerday;

var bbDays = prompt("How many days would you like to rent Brother Bear?");
var bbTotal = bbDays * pricePerday;

var hercDays = prompt("How many days would you like to rent Hercules?");
var hercTotal = hercDays * pricePerday;

var totalCost = lmTotal + bbTotal + hercTotal;

alert("Congratulations for renting movies in 2023! Your total comes to $" + totalCost.toFixed(2) + "." +
    "  We'd be happy to take cash only at this time.");

//programming contractor

alert("Hello there programming contractor.  Want to know how much you're getting paid this week?" +
    "  Simply answer the following questions to find out!");

var googlePay = 400;
var googleHours = prompt("How many hours did you work at Google?");
var googleTotal = googlePay * googleHours;

var amazonPay = 380;
var amazonHours = prompt("How many hours did you work at Amazon?");
var amazonTotal = amazonPay * amazonHours;

var facebookPay = 350;
var facebookHours = prompt("How many hours did you work at Facebook?");
var facebookTotal = facebookPay * facebookHours;

var weeklyPay = googleTotal + amazonTotal + facebookTotal;

alert("Awesome job programming contractor!.  Your total weekly pay is $" + weeklyPay.toFixed(2) + "");

//class enrollment

alert("Hello future graduate!  Want to see if you're eligible for enrollment?" +
    "  Please respond to the following prompts, and we'll give you an immediate answer!");

var classNumber = confirm("Please select 'OK' if the class still has seats available.  If not, please select " +
    " 'Cancel'.");

var noConflict = confirm("Please select 'OK' if there will not be a conflict with your current schedule.  If there, " +
    " there will be a conflict, please select 'Cancel'.");

var goodTogo = classNumber && noConflict;

alert("It is " + goodTogo + " that you'll be able to enroll in this course.  Please call the registrar's office for more" +
    " information, and best of luck in your academic career!");

//product offer

alert("Welcome to Spendtilyou'rebrokeazon!  Please provide responses to see if you're" +
    " eligible for our special offer of the week.");

var bigSpender = prompt("How many items did you buy?");
var boughtEnough = bigSpender > 2;
var preMember = confirm("Please select 'OK' if you're a premium member.  If not, select 'Cancel'.");
var notExpired = confirm("If the offer hasn't expired, select 'OK'.  If it's no longer valid" +
    " please select 'Cancel'");

var goodOffer = (boughtEnough || preMember) && notExpired;

alert("It is " + goodOffer + " that you're eligible for our offer.");





