const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("HEllo World");
});

app.listen(3001, () =>{
    console.log("Running on port 3001");
});