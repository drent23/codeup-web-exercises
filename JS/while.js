var i = 1;
while (i <= 16) {
    console.log("2" ** i);
    i++;
}
/* the code in the do block will get executed once before the while condition is checked. The condition is then checked to decide if the loop should continue. For the above example, the do block will only get executed once
 */


var conesToSell = Math.floor((Math.random() * 50) + 50);
alert("You have " + conesToSell + " cones to sell today.");
do {
    var howManyCones = Math.floor((Math.random() * 5) + 1);
    if (howManyCones > conesToSell) {
       console.log("Cannot sell you " + howManyCones + " cones because I only have " + conesToSell + " left.");
    } else {
        conesToSell -= howManyCones;
        console.log(howManyCones + " cones sold.");
        console.log(conesToSell + " cones are left.");
    }
} while (conesToSell > 0);
    console.log("Hooray!  We're sold out!");

