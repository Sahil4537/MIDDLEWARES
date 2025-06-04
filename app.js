const express = require("express");
const app = express();

app.use("/api", (req, res, next) =>{
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("Token is not valid");
});


app.get("/api", (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi! I am Root.");
});

app.listen(8080, () => {
    console.log("server listening to port 8080.");
});