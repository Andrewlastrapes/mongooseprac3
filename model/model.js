var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practice");



var players = new mongoose.Schema({
	name: String,
	position: String,
	team: String

})


var player = mongoose.model("players", players);

module.exports = player 





