var debug = true;
/**
 *
 * @param {query} the search query that we pass into the twitter API
 * @param {side} the side that we want to display the tweet on
 */
function get_tweet(query, side){
    if(debug) console.log('query is: ',query);
    apis.twitter.getData(query, function(success,response){


        var success = success;
        if(debug) console.log('success is: ', success);
        var response = response;
        if(debug) console.log('response is: ', response);


        var english_tweets_arr = [];

        for(var i=0; i<response.tweets.statuses.length;i++){//finds all tweets in English and stores in array
            if(response.tweets.statuses[i].metadata.iso_language_code == 'en'){
                english_tweets_arr.push(response.tweets.statuses[i])
            }
        }



        var rand_num1 = Math.floor(Math.random() * english_tweets_arr.length);

        var retweet_count = english_tweets_arr[rand_num1].retweet_count;
        if(debug) console.log('retweet count is: ', retweet_count);

        var body_text = english_tweets_arr[rand_num1].text;
        if(debug) console.log('body_text is: ', body_text);

        var username = english_tweets_arr[rand_num1].user.name;
        if(debug) console.log('username is: ', username);

        var new_tweet1 = new Tweet(retweet_count, body_text, username);

        var rand_num2 = rand_num1 + 1;

        var retweet_count = english_tweets_arr[rand_num2].retweet_count;
        if(debug) console.log('retweet_count is: ', retweet_count);

        var body_text = english_tweets_arr[rand_num2].text;
        if(debug) console.log('body_text is: ', body_text);

        var username = english_tweets_arr[rand_num2].user.name;
        if(debug) console.log('username is: ', username);

        var new_tweet2 = new Tweet(retweet_count, body_text, username);

        if(side == 'left'){
            display_left_tweet(new_tweet1);
            if(debug) console.log('left side called', response);
        }
        else if(side == 'right'){
            display_right_tweet(new_tweet2);
            if(debug) console.log('right side called', response);
        }
    })
}
/**
 *
 * @param {tweet} the new tweet object that is created to be displayed onto the DOM
 */
function display_right_tweet(tweet){
    if(debug) console.log('display right tweet called');
    $('#r_user').text(tweet.username);
    $('#r_text').text(tweet.body_text);
    $('#r_retweets').text(tweet.retweet_count);}
/**
 *
 * @param {tweet} the new tweet object that is created to be displayed onto the DOM
 */
function display_left_tweet(tweet){
    if(debug) console.log('display left tweet called');
    $('#l_user').text(tweet.username);
    $('#l_text').text(tweet.body_text);
    $('#l_retweets').text(tweet.retweet_count);
}

$(document).ready(function(){
    if(debug) console.log('doc ready');
    $('#search_btn').on('click', function(){
        var query_str = $('#search_query').val();
        get_tweet(query_str, 'left');
        get_tweet(query_str, 'right');
        // added class removes so when the user clicks for the next search the choice is effectively reset
        $('.right-container').removeClass('r-active');
        $('.left-container').removeClass('active');
        //added tweet sound on search
        $('#audio').trigger('play');
    });

    $('.star-left').on('click', function(){
        var query_str = $('#search_query').val();
        $('.left-container').addClass('active');
        $('.right-container').removeClass('r-active');
        get_tweet(query_str,'right');
    });
    $('.star-right').on('click', function(){
        var query_str = $('#search_query').val();
        $('.left-container').removeClass('active');
        $('.right-container').addClass('r-active');
        get_tweet(query_str,'left');
    });
});

