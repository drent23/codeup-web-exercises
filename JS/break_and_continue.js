
do while(i = 1; i <=50; i++) {
    var oddNumber = prompt("Please provide the first odd number, between 1 and 50, that comes to mind.");
    if(oddNumber % 2 === 0) {
        prompt("That was invalid input. Please enter an odd number between 1 and 50.");
        break;
    } if(oddNumber % 2 !== 0) {
        console.log("Number to skip is: " + oddNumber);

        console.log("Here is an odd number: " + i);
        continue;
    }
}