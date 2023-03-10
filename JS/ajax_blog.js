(function() {
    "use strict";
    $.ajax('data/blog.json').done(function(data) {
        console.log(data);
        console.log('it worked')
    })
    // TODO: Take the data from inventory.json and append it to the products table
    $.ajax('data/blog.json').done(function(data) {
        let blogHtml = '';
        data.forEach(function (post) {
            blogHtml += '<div><div>' + post.title + '</div';
            blogHtml += '<div>' + post.content + '</div>';
            blogHtml += '<div>' + post.categories + '</div>';
            blogHtml += '<div>' + post.date + '</div></div>';
            console.log(post);
        })
        $('#posts').append(blogHtml);
    })
    $('#refreshPosts').click(function(e) {
        e.preventDefault();
        $('#posts').html();
    })
})();
