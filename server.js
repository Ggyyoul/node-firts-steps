const express = require("express");
const app = express();
const router = require("./network/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("la app esta escuchando en http://localhost:3000");
