(function() {
    "use strict";

    var myCar = {};
    myCar.make = "Honda";
    myCar.model = "Pilot";
    myCar.color = "Black";
    myCar.transmission = "Auto";
    console.log(myCar);
    myCar.model = {trim: "EX-L", drive: "4WD", seats: "Leather & heated"};
    var soundSystem = ["CD", "FM", "AM", "AUX", "USB"];
    myCar.sound = soundSystem;
    console.log(myCar);

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {firstName: "David", lastName: "Renteria"};
    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName;
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function spendMore(shoppers) {
        shoppers.forEach(function (shopper) {
            if (shopper.amount > 200) {
                console.log(shopper.name + ", you spent over $200, you get a 12% discount today.  Your balance due is " + (shopper.amount * .88).toFixed(2));
            } else {
                console.log(shopper.name + ", spending $200 would qualify you for a 12% discount. Your balance due is " + shopper.amount);
            }
            console.log(spendMore());
            console.log("_________________________");
        })
    }

        /** TODO:
         * Create an array of objects that represent books and store it in a
         * variable named `books`. Each object should have a title and an author
         * property. The author property should be an object with properties
         * `firstName` and `lastName`. Be creative and add at least 5 books to the
         * array
         *
         * Example:
         * > console.log(books[0].title) // "The Salmon of Doubt"
         * > console.log(books[0].author.firstName) // "Douglas"
         * > console.log(books[0].author.lastName) // "Adams"
         */

        var books = [
            {title: 'Between the World and Me', author: {firstName: 'Ta-Nehisi', lastName: 'Coates'}},
            {title: 'Rich Dad Poor Dad', author: {firstName: 'Robert', lastName: 'Kiyosaki'}},
            {title: 'Who Moved My Cheese', author: {firstName: 'Spencer', lastName: 'Johnson'}},
            {title: 'Thinkertoys', author: {firstName: 'Michael', lastName: 'Michalko'}},
            {title: 'The 21 Irrefutable Laws of Leadership', author: {firstName: 'John', lastName: 'Maxwell'}},
            {title: "You're Broke Because You Want to Be", author: {firstName: 'Larry', lastName: 'Winget'}},
        ];
        console.log(books);

        /**
         * TODO:
         * Loop through the books array and output the following information about
         * each book:
         * - the book number (use the index of the book in the array)
         * - the book title
         * - author's full name (first name + last name)
         * Example Console Output:
         * Book # 1
         *      Title: The Salmon of Doubt
         *      Author: Douglas Adams
         *      ---
         *      Book # 2
         *      Title: Walkaway
         *      Author: Cory Doctorow
         *      ---
         *      Book # 3
         *      Title: A Brief History of Time
         *      Author: Stephen Hawking
         *      ---*/

        books.forEach(function (book, index) {
            console.log("Book # " + (index + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + "" + book.author.lastName);
            console.log("_______________________");
        })

        /**
         * Bonus:
         * - Create a function named `createBook` that accepts a title and author
         *   name and returns a book object with the properties described
         *   previously. Refactor your code that creates the books array to instead
         *   use your function.
         * - Create a function named `showBookInfo` that accepts a book object and
         *   outputs the information described above. Refactor your loop to use your
         *   `showBookInfo` function.
         */
    function createBook(title, authorFirst, authorLast) {
        return {title: title, author: {firstName: authorFirst, lastName: authorLast}};
    }


    console.log(createBook("Grapes of Wrath", "John", "Steinbeck"));

        var booksPart2 = [
            createBook('Between the World and Me', 'Ta-Nehisi', 'Coates'),
            createBook('Rich Dad Poor Dad', 'Robert', 'Kiyosaki'),
            createBook('Who Moved My Cheese', 'Spencer', 'Johnson'),
            createBook('Thinkertoys', 'Michael', 'Michalko'),
            createBook('The 21 Irrefutable Laws of Leadership', 'John', 'Maxwell'),
            createBook("You're Broke Because You Want to Be", 'Larry', 'Winget')];

        var bookTitle = prompt("Please enter the title of the book.");
        var authorFname = prompt("Please enter the author's first name.");
        var authorLname = prompt("Please enter the author's last name.");

        booksPart2.push(createBook(bookTitle, authorFname, authorLname));

        function showBookinfo(book) {
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + "" + book.author.lastName);
            console.log("_______________________");
        }

        booksPart2.forEach(function(book, index) {
            console.log("Book # " + (index +1));
            showBookinfo(book);
        })

})()