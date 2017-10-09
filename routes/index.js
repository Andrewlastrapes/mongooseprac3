var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var player = require("../model/model.js");


router.post("/index", function(req, res){

	console.log("ASdfasdfasdfasdf")

	var newPlayer = new player({
		name: req.body.name,
		position: req.body.position,
		team: req.body.team
	});

		newPlayer.save(function(err){
			if(err) throw err 
			console.log("Saved")
			});
		res.redirect("index")
});



module.exports = router;
