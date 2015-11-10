

apis.twitter.getData('Drake',function(success,response){
    var success = success;
    console.log(success);
    var response = response;
    console.log(response);
    var if_retweeted = response.tweets.statuses[0].retweeted;
    console.log(if_retweeted);//logs a bool for first tweet in response obj
    var retweet_count = response.tweets.statuses[0].retweet_count;
    console.log(retweet_count);//logs the retweet count for first tweet in response obj
    var body_text = response.tweets.statuses[0].text;
    console.log(body_text);//logs the main text for first tweet in response obj
    var username = response.tweets.statuses[0].user.name;
    console.log(username);//logs the username for first tweet in response obj
});


