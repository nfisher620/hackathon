/**
 * Created by nicolespence on 11/10/15.
 */
/**
 * Creates an instance of Tweet.
 *
 * @constructor
 * @this {Tweet}
 * @param {retweet_count} the number of associated retweets.
 * @param {body_text} the main text of tweet obj.
 * @param {username} the username of the tweeter.
 */
function Tweet(retweet_count, body_text, username) {
    this;
    this.retweet_count = retweet_count;
    this.body_text = body_text;
    this.username = username;
}


