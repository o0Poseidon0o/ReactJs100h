import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("SERVER IS RUNNING");
});

app.listen(5000, () => {
    console.log("Server start at http://localhost:5000");
});