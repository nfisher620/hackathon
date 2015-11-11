/**
 * Created by nicolespence on 11/10/15.
 */
function Tweet(user_id, retweet_count, body_text, username) {
    this;
    this.is_winner;
    this.id = user_id;
    this.retweet_count = retweet_count;
    this.body_text = body_text;
    this.username = username;
    this.win_total = 0;
    this.win_status;
    this.win_total = function(if_won){
        if(if_won){
            this.win_total++;
        }
    }
    this.set_win_status = function(win_total){
        if(win_total == 1){
            this.win_status = 'Amateur Tweeter'
        }
        else if(win_total >= 3){
            this.win_status = 'Master Tweeter'
        }
    }
}


