///**
// * Created by nickf_000 on 11/10/2015.
// */
//
//Winner.prototype=Object.create(Tweet.prototype);
//Winner.prototype.constructor = Winner;
//
//function Winner(){
//    var self = this;
//    self.win_total = 0;
//    self.win_status;
//    Tweet.call(this, user_id, if_retweeted, retweet_count, body_text, username);
//    self.win_total = function(if_won){
//        if(if_won){
//            self.win_total++;
//        }
//    }
//    self.set_win_status = function(win_total){
//        if(self.win_total == 1){
//            self.win_status = 'Amateur Tweeter'
//        }
//        else if(self.win_total >= 3){
//            self.win_status = 'Master Tweeter'
//        }
//    }
//}
//
//var test_winner = new Winner();
//console.log(test_winner);