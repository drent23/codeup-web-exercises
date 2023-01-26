"use strick"

// function named showMultiplicationTable; accepts number and console.logs multiplication table for that number (1-10); ex showMultiplicationTable(7) = 7 x 1, 7 x 2, 7 x 3.....7 x 9, 7 x 10
var num = prompt("Pick a number to see its multiplication table!");
function showMultiplicationTable(num) {
    for(i = 1; i <= 10; i++) {
        console.log(num.toString() + " x " + i.toString() + " = " + num * i);
    }
}
showMultiplicationTable(num);

// use for loop to generate random numbers between 20 & 200 and output to console whether each is odd or even
// var randoNum = alert(Math.floor((Math.random() * 200) + 20).toString() + "is your randomly generated number. Now let's see if it's odd or even");

for(i = 1; i <= 10; i++) {
    var randoNum = Math.floor((Math.random() * 180) + 20);
    if(randoNum % 2 === 0) {
        console.log(randoNum.toString() + " is an even number.");
    } else {
        console.log(randoNum.toString() + " is an odd number");
  }
}

for(i = 1; i <= 9; i++) {
    if (i === 1) {
        console.log(i.toString());
    } else if (i === 2) {
        console.log(i.toString() * 11);
    } else if (i === 3) {
        console.log(i.toString() * 111);
    } else if (i === 4) {
        console.log(i.toString() * 1111);
    } else if (i === 5) {
        console.log(i.toString() * 11111);
    } else if (i === 6) {
        console.log(i.toString() * 111111);
    } else if (i === 7) {
        console.log(i.toString() * 1111111);
    } else if (i === 8) {
        console.log(i.toString() * 11111111);
    } else {
        console.log(i.toString() * 111111111);
    }
}

for(i = 100; i > 0; i = i - 5) {
    console.log(i.toString())
}








