module.exports = function(app){
    app.get("/, function")
}



var PORT = 8000

app.use(bodyParser.urlencoded({ extended: tru}))
app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set("views", path.join(__dirname, "./client/view"))
app.set("view engine", "ejs")

require("./server/config/mongoose")

require("./server/config/routes")(app)

app.listen(PORT, function()
)
