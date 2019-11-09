var friends = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends" , function (req, res){
        res.json(friends);
    })

    app.post("/api/friends" , function (req,res){
        
        var friendMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        }
        console.log(req.body);
        
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference= 0;

        for (var i = 0; i < friends.length; i++){
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j] ; j++){
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]))

                if (totalDifference <= friendMatch.friendDiff) {

                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDiff = totalDifference;
                }
            }
        }
        console.log(friendMatch);
        friends.push(userData);
        res.json(friendMatch);
    })
}