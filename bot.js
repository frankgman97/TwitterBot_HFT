
var Twit = require('twit'); //import statement
var config = require('./config'); // import API Keys
// console.log(config);

var T = new Twit(config);

var params = 
{
    q: '@Wander',
   
    //Goal: to parse .text from tweet that has the following structure:
    //#BUY(SPACE)$AMD(SPACE)~QT<INTEGER>


    count: 10
}

//for printing the whole thing
// T.get('search/tweets', params, function(err, data, response) {
//     console.log(data)
//   })

T.get('search/tweets', params, getData);

function getData(err, data, response) {
    var tweets = data.statuses;
    for(var i =0;i<tweets.length;i++)
    {
     console.log("----START TWEET----");
    //   console.log(tweets[i].entities);
     console.log(tweets[i].text);
    //  console.log(tweets[i].entities);
     console.log("----END TWEET-----"); 
     console.log("\n")
    }
};   