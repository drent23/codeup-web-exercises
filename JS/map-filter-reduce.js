const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLangs = users.filter( (user) =>
    (user.languages.length >= 3));
console.log(threeLangs);


let arrEmail = users.map((user) => (user.email));
console.log(arrEmail);

let totalExperience = users.reduce((totalYears, user) => (totalYears + user.yearsOfExperience), 0);
console.log("total number of years worked equals " + totalExperience)
console.log(`the avg years per employee is ${totalExperience/users.length}`);

let whySoLong = users.reduce((address, user) =>{
    console.log(address);
    console.log(user.email);
    if (user.email.length > address.length
    ){return user.email}
    else{return address}},'');
console.log(whySoLong);


// const langName = users.reduce((lang, user) => {
//     if(user.languages !== lang) {
//         console.log(user.languages);
//         return user.languages;
//     }
//     console.log(lang);
//     return lang;
// }, '');
// console.log(langName);

// let uniquerList = function (x) {
//     const uniqueList = x.reduce((list, user) => {
//         list.push(...user.languages.filter(language => {
//             return !list.includes(language);
//         }))
//         return list;
//     },[]).join(', ');
//     return uniqueList
// }
// console.log(uniquerList(users));

// Notes from lecture
//
// let myNums = [1, 2, 3, 4, 5];
// // let myNumsTimesTwo = myNums.map((num)=>(num * 2))
// let myNumsTimesTwo = myNums.map((num)=>{
//     console.log(num);
//     return num *2;
// })
// console.log(myNums);
// console.log(myNumsTimesTwo);
// //works w/ EVERY part of element provided
//
// let myStrings = ["hello", "world", "buenos","dias","codeup"];
// let cleanStrings = myStrings.map((string)=>`Here's a string: ${string.toLowerCase()}`)
// console.log(cleanStrings);
//
// //building objects through .map
//
// let names = ["kenny howell", "david renteria", "travis gomez", "tommy mescall"];
//
// let peopleObj = names.map(function (nameString) {
//     let arrName = nameString.split('');
//     console.log(arrName);
//     return {fName: arrName[0], lName: arrName[1]};
// })
//
//     //filter i want to go through arr and check if it's an element
//
//     let numSequence = [1,2,3,4,5,6,7,8];
//     //can filter give back ONLY ODDS
//
//     let oddNums = numSequence.filter(function (num){
//         return num % 2 !== 0; //gives a condition
//     })
//     console.log(oddNums);
//
//     let aNames = names.filter(function (name){
//         return name[0] === "A"; //should give back 2 strings
//     })
// console.log(aNames); // every string can be considered an array (type city name in console w/ index "Dallas"[0] = "D"
//
// // array of bools
//
// let booLiterals = [true, false, true, true, false];
// let trueBools = booLiterals.filter(function(boolean){
//     return boolean == true;
// })
// console.log(trueBools);
//
// // array of objects
//
// let userObjects = [
//     {
//         userName: "ken2cool",
//         password: "kensSECRETpw",
//         isAdmin: true
// },{
//         userName: "drent23",
//         password: "drSECRETpw",
//         isAdmin: true
// },{
//         userName: "paulyG",
//         password: "pgSECRETpw",
//         isAdmin: false
//
// }
// ];
//
// let myAdmins = userObjects.filter(function (user){
//     return user.isAdmin === true;
// })
// for(admin of myAdmins){
//     console.log(`Here's an administrator: ${admin.userName}`)
// }
//
// //reduce
// console.log(`--------------`);
// let favNums = [7,13,777,4028,999];
// //method(callbackFn()) = callbackFunctions are arguments
//
// let numsAdded = favNums.reduce(function (accumulator, number){
//     console.log("What's the accumulator?" + accumulator);
//     console.log("What's the number?" + number);
//     return accumulator + number;
// }, 4) //2nd arg will be the first value, then adds, 2nd arg is OPTIONAL - if you want to EXPLICITLY tell it what to start with
// console.log(numsAdded);
//
//
//
// let salesPeople = [
//     {name: "David R", sales: 100},
//     {name: "Gage J", sales: 150},
//     {name: "Jenna D", sales: 125},
//     {name: "Genesis S", sales: 200}
// ]
//
// //what were total sales?
//
// let totalSales = salesPeople.reduce(function (salesNum, salesPerson){
//     return salesNum + salesPerson.sales;
//     console.log(totalSales);
//
// `Good work this month - Codeup Motors sold ${totalSales} cars this month.`;
// })
// let namesString = names.reduce(function(stringAccum, string){
//     return stringAccum + " | " + string;
// })
// console.log(namesString);
//
// let salesNames = salesPeople.reduce(function(stringAccum, salesperson){
//     return stringAccum + salesperson.name + " | ";
// }, "here's some of our salespeople: ")
// console.log(salesNames);
//
// //spread operator - a binary operator - (DLC content) works w/ string or array to expand
// console.log("--------");
// console.log(...names);
// console.log(names[0]);
//
// function sumNums(num1, num2, num3, num4, num5, num6, num7){
//     return num1+num2+num3+num4+num5+num6+num7;
// }
// console.log(sumNums(1,2,3,4,5,6,7));
// console.log(sumNums(...favNums));
//
// //combining 2 arrays
//
// let myFoods = ["rice and beans", "pizza", "shrimp linguine", "lobster mac n cheese", "street tacos"];
// let studentFoods = ["burger", "taco", "PB&J", "protein shake"];
// let ourLunches = [...myFoods,...studentFoods]
// console.log(ourLunches);


