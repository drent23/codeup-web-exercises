do {
    var oddNumber = Number(prompt("Please provide the first odd number, between 1 and 50, that comes to mind."));
    if(oddNumber % 2 === 0) {
        alert("That was an even number.  Please provide an odd number ranging from 1 to 50.");
    } else if(oddNumber < 0 || oddNumber > 50) {
        alert("That number was either a negative number or greater than 50.  Please provide an odd number ranging from 1 to 50.");
    } else if(isNaN(oddNumber)) {
        alert("This is not a number.  Please provide an odd number fanging from 1 to 50.");
    } else {
        alert("Thank you for the valid number.");
    }
        break;
}   while (true);

for(var i = 1; i <= 50; i++) {
    if( i % 2 === 0) {
        continue;
    } else if( i === oddNumber) {
        console.log("Yikes! Skipping number:" + oddNumber);
    } else {
        console.log("Here is an odd number: " + i);
    }
}
