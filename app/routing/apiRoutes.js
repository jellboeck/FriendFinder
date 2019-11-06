var friendList = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends" , function (req, res){
        res.json(friendList);
    })

    app.post("/api/freinds" , function (req,res){
        
        var friendMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        }

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference= 0;

        for (var i = 0; i < friendArray.length; i++){
            totalDifference = 0;

            for (var j = 0; j < friendArray[i].scores[j] ; j++){
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendArray[i].scores[j]))

                if (totalDifference <= friendMatch.friendDiff) {

                    friendMatch.name = friendArray[i].name;
                    friendMatch.photo = friendArray[i].photo;
                    friendMatch.friendDiff = totalDifference;
                }
            }
        }

        friendArray.push(userData);
        res.json(friendMatch);
    })
}