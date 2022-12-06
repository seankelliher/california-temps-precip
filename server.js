const express = require("express");
const app = express();
const port = 3000;

app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen((process.env.PORT || 3000), () => {
  console.log(`Server listening on port ${process.env.PORT} or ${port}.`)
});