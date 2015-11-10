/**
 * Created by nicolespence on 11/10/15.
 */
function Tweet(id,if_retweeted,retweet_count, body_text, username){
    var self = this;
    self.id=id;
    self.if_retweeted=if_retweeted;
    self.retweet_count=retweet_count;
    self.body_text=body_text;
    self.username=username;
}
