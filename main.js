var winner;
var index = 0;

function get_tweet(query, side){
    console.log('query is: ',query);
    apis.twitter.getData(query, function(success,response){
        var success = success;
        console.log(success);
        var response = response;
        console.log(response);
        var english_tweets_arr = [];
        for(var i=0; i<response.tweets.statuses.length;i++){
            if(response.tweets.statuses[i].metadata.iso_language == 'en'){
                english_tweets_arr.push(response.tweets.statuses[i])
            }
        }
        var rand_num1 = Math.floor(Math.random() * english_tweets_arr.length);
        var retweet_count = response.tweets.statuses[rand_num1].retweet_count;
        console.log(retweet_count);//logs the retweet count for first tweet in response obj
        var body_text = response.tweets.statuses[rand_num1].text;
        console.log(body_text);//logs the main text for first tweet in response obj
        var username = response.tweets.statuses[rand_num1].user.name;
        console.log(username);//logs the username for first tweet in response obj
        var new_tweet1 = new Tweet(index, retweet_count, body_text, username);

        var rand_num2 = rand_num1 + 1;
        var retweet_count = response.tweets.statuses[rand_num2].retweet_count;
        console.log(retweet_count);//logs the retweet count for first tweet in response obj
        var body_text = response.tweets.statuses[rand_num2].text;
        console.log(body_text);//logs the main text for first tweet in response obj
        var username = response.tweets.statuses[rand_num2].user.name;
        console.log(username);//logs the username for first tweet in response obj
        var new_tweet2 = new Tweet(index, retweet_count, body_text, username);

        if(side == 'left'){
            display_left_tweet(new_tweet1);
            console.log('left side called', response);
        }
        else if(side == 'right'){
            display_right_tweet(new_tweet2);
            console.log('right side called', response);
        }
    })
}

$(document).ready(function(){
    console.log('doc ready');
    $('#search_btn').on('click', function(){
        var query_str = $('#search_query').val();
        get_tweet(query_str, 'left');
        get_tweet(query_str, 'right');
    })

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

function display_right_tweet(tweet){
    console.log('display tweets called');
    $('#r_user').text(tweet.username);
    $('#r_text').text(tweet.body_text);
    $('#r_retweets').text(tweet.retweet_count);}

function display_left_tweet(tweet){
    console.log('display tweets called');
    $('#l_user').text(tweet.username);
    $('#l_text').text(tweet.body_text);
    $('#l_retweets').text(tweet.retweet_count);
}




