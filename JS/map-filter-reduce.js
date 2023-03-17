let myNums = [1, 2, 3, 4, 5];
// let myNumsTimesTwo = myNums.map((num)=>(num * 2))
let myNumsTimesTwo = myNums.map((num)=>{
    console.log(num);
    return num *2;
})
console.log(myNums);
console.log(myNumsTimesTwo);
//works w/ EVERY part of element provided

let myStrings = ["hello", "world", "buenos","dias","codeup"];
let cleanStrings = myStrings.map((string)=>`Here's a string: ${string.toLowerCase()}`)
console.log(cleanStrings);

//building objects through .map

let names = ["kenny howell", "david renteria", "travis gomez", "tommy mescall"];

let peopleObj = names.map(function (nameString) {
    let arrName = nameString.split('');
    console.log(arrName);
    return {fName: arrName[0], lName: arrName[1]};
})

    //filter i want to go through arr and check if it's an element

    let numSequence = [1,2,3,4,5,6,7,8];
    //can filter give back ONLY ODDS

    let oddNums = numSequence.filter(function (num){
        return num % 2 !== 0; //gives a condition
    })
    console.log(oddNums);

    let aNames = names.filter(function (name){
        return name[0] === "A"; //should give back 2 strings
    })
console.log(aNames); // every string can be considered an array (type city name in console w/ index "Dallas"[0] = "D"

// array of bools

let booLiterals = [true, false, true, true, false];
let trueBools = booLiterals.filter(function(boolean){
    return boolean == true;
})
console.log(trueBools);

// array of objects

let userObjects = [
    {
        userName: "ken2cool",
        password: "kensSECRETpw",
        isAdmin: true
},{
        userName: "drent23",
        password: "drSECRETpw",
        isAdmin: true
},{
        userName: "paulyG",
        password: "pgSECRETpw",
        isAdmin: false

}
];

let myAdmins = userObjects.filter(function (user){
    return user.isAdmin === true;
})
for(admin of myAdmins){
    console.log(`Here's an administrator: ${admin.userName}`)
})