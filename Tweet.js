/**
 * Created by nicolespence on 11/10/15.
 */
function Tweet(user_id, if_retweeted, retweet_count, body_text, username) {
    var self = this;
    self.is_winner;
    self.id = user_id;
    self.if_retweeted = if_retweeted;
    self.retweet_count = retweet_count;
    self.body_text = body_text;
    self.username = username;
    self.win_total = 0;
    self.win_status;
    self.win_total = function(if_won){
        if(if_won){
            self.win_total++;
        }
    }
    self.set_win_status = function(win_total){
        if(win_total == 1){
            self.win_status = 'Amateur Tweeter'
        }
        else if(win_total >= 3){
            self.win_status = 'Master Tweeter'
        }
    }
}


