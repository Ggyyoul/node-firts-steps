const express = require("express");
//mport express from 'express';

let app = express();

app.use("/", function (req, res) {
  res.send("hola");
});

app.listen(3000);
console.log("la app esta escuchando en http://localhost:3000");
