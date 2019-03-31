
let express = require("express");
let app = express();

const server = require('http').Server(app);
let io = require("socket.io").listen(server);

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/* Serves index file */
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

/* Serves stylesheet */
app.get("/device", function (req, res) {
    res.sendFile(__dirname + "/device.html")
});

app.post("/data", function (req, res) {
    console.log(req.body);
    io.emit("data", req.body);
    res.status(200);
});

io.on("connection", function (socket) {

});


server.listen( process.env.PORT || "3001", function (err) {
    if (err) {
        console.log("Error starting the server", err);
    }
    console.log("Starting the server on port", server.address().port);
});