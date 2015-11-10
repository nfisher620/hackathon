var winner;

function get_tweet(query){
    var tweet_arr = [];
    var output_arr = [];
    var search_param = String(query);
    apis.twitter.getData(search_param, function(success,response){
        var success = success;
        console.log(success);
        var response = response;
        console.log(response);
        var rand_num = Math.floor(Math.random() * 14);
        if(response.tweets.statuses[rand_num]){
            var if_retweeted = response.tweets.statuses[rand_num].retweeted;
            console.log(if_retweeted);//logs a bool for first tweet in response obj
            output_arr.push(if_retweeted);
            var retweet_count = response.tweets.statuses[rand_num].retweet_count;
            console.log(retweet_count);//logs the retweet count for first tweet in response obj
            output_arr.push(retweet_count);
            var body_text = response.tweets.statuses[rand_num].text;
            console.log(body_text);//logs the main text for first tweet in response obj
            output_arr.push(body_text);
            var username = response.tweets.statuses[rand_num].user.name;
            console.log(username);//logs the username for first tweet in response obj
            output_arr.push(username);
        }
    })
    return output_arr;// if_retweeted, retweet_count, body_text, username
}

$(document).ready(function(){
    console.log('doc ready');
    $('#search_btn').on('click', function(){
        set_tweets();
    })

});

function set_tweets(){
    var output_arr = [];
    var query_str = $('#search_query').val();
    var tweet_left_info = get_tweet(query_str);
    var left_tweet = new Tweet(1,
        tweet_left_info[0],
        tweet_left_info[1],
        tweet_left_info[2],
        tweet_left_info[3]);
    console.log(left_tweet);
    output_arr.push(left_tweet);
    var tweet_right_info = get_tweet(query_str);
    var right_tweet = new Tweet(1,
        tweet_left_info[0],
        tweet_left_info[1],
        tweet_left_info[2],
        tweet_left_info[3]);
    console.log(right_tweet);
    output_arr.push(right_tweet);
    return output_arr;
}

function display_tweets(){

}

$('tweet').on('click','star', function(){

});


