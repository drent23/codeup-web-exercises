(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    $.ajax('data/inventory.json').done(function(data) {
    console.log(data);
    console.log('it worked')
})
    // TODO: Take the data from inventory.json and append it to the products table
    $.ajax('data/inventory.json').done(function(data) {
    let toolStoreHTML = '';
    data.forEach(function (tool) {
    toolStoreHTML += '<tr><td>' + tool.title + '</td>';
    toolStoreHTML += '<td>' + tool.quantity + '</td>';
    toolStoreHTML += '<td>' + tool.price + '</td>';
    toolStoreHTML += '<td>' + tool.categories + '</td></tr>';
    console.log(tool);
})
    $('#insertProducts').append(toolStoreHTML);
})
    $('#refreshTools').click(function(e) {
    e.preventDefault();
    $('#insertProducts').html();
})
})();