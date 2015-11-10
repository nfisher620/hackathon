/**
 * Created by nickf_000 on 11/10/2015.
 */
function Winner(username){
    Tweet.call(this,username);
    this.username=username;
}

Winner.prototype=Object.create(Tweet.prototype);
Winner.prototype.constructor=Winner;

Tweet.prototype.win_total = function (){
    var total = win_count;
};

Tweet.prototype.win_streak = function () {
    this.win_count++;
};
