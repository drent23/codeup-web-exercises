"use strict";

$('#hiddenLink').click(function(){
    $('dd').toggleClass('invisible');
})


$('#liYellow').click(function () {
    $("ul").each(function() {
        $(this).children().last().css('background-color', 'yellow')
})})
$('h3').click(function () {
    $("ul").each(function() {
        $(this).children().css('font-weight', 'bold')
    })})
$('li').click(function () {
    $("ul").each(function() {
        $(this).children().first().css('color', '#00F')
    })})


//
//     When any list item is clicked, first li of the parent ul should have a font color of blue.