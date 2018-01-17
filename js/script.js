$(function(){
    getQuote();
    $('.trigger').click(function() {
        getQuote();
    })
});

function getQuote() {
    $.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
    var data = input[0];

    var quoteText = $(data.content).text().trim();
    var quoteAuthor = data.title;

    if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
    }

    var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;
    if (tweetText.length > 280) {
        getQuote();
    } else {
        var tweet = tweetLink + encodeURIComponent(tweetText);
        $('.quote').text(quoteText);
        $('.author').text("Author: " + quoteAuthor);
        $('.tweet').attr('href', tweet);
    }
};

