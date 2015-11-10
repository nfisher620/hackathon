

function get_tweet(query){
    var output_arr = [];
    var search_param = String(query);
    apis.twitter.getData(search_param, function(success,response){
        var success = success;
        console.log(success);
        var response = response;
        console.log(response);
        var if_retweeted = response.tweets.statuses[0].retweeted;
        console.log(if_retweeted);//logs a bool for first tweet in response obj
        output_arr.push(if_retweeted);
        var retweet_count = response.tweets.statuses[0].retweet_count;
        console.log(retweet_count);//logs the retweet count for first tweet in response obj
        output_arr.push(retweet_count);
        var body_text = response.tweets.statuses[0].text;
        console.log(body_text);//logs the main text for first tweet in response obj
        output_arr.push(body_text);
        var username = response.tweets.statuses[0].user.name;
        console.log(username);//logs the username for first tweet in response obj
        output_arr.push(username);
    })
    return output_arr;// if_retweeted, retweet_count, body_text, username
}

$(document).ready(function(){

});


$('tweet_container').on('click', function(){

});

