
module.exports = function(app) {

var surveyData = require("../data/friends");
    app.get('/api/friends', function(req, res) {
        res.json(surveyData);
    });


    app.post('/api/friends', function(req, res) {
            surveyData.push(req.body);
            //logic to look through everyones score. absolutes. display the closests match in a module to the html
       
    });

    app.post('/api/clear', function(req, res) {
        surveyData.length = 0;
    
        res.json({ok:true});
    });
};

