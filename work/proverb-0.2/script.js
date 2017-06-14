function getProverb() {

$(document).ready(function() {
    $.ajax({
        url: "https://eda-te-reo.herokuapp.com/api/proverbs"
    }).then(function(data) {

     $('.p-source').html("The proverb is: " + data.source);
     $('.p-translation').html("The translation is: " + data.translation);
      // $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' ).attr('target', '_blank');

    });
});

}
