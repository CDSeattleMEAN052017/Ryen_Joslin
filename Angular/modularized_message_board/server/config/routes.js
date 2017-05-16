var messages = require("./../controllers/messages.js")

module.exports = function(app){
    app.get("/", messages.index)
    app.post("/new_message", messages.create_messages{
        messages.create_messages(req, res)
    })

    app.post("/new_comment", function(req, res){
        messages.create_comment(req, res)
    })
}
