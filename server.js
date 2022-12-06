const express = require("express");
const app = express();
const port = 3000;
const weather = process.env.NOAA_TOKEN;

app.use(express.static(__dirname + "/dist/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen((process.env.PORT || 3000), () => {
  console.log(`Server listening on port ${process.env.PORT} or ${port}.`)
});