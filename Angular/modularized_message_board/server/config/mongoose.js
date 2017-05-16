var mongoose = require("mongoose")
var fs = require("fs")
var path = require("path")

const DB_NAME = "message_board_201705"

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/message_board_201705")

var models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf(".js") >= 0){
        require(path.join(models_path, file))
    }
})
