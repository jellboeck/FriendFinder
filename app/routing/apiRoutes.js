var friendList = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends" , function (req, res){
        res.json(friendList);
    })

    app.post("/api/freinds" , function (req,res){
        
    })
}