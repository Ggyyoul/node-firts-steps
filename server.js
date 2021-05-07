const express = require("express");
const db = require("./db");
const router = require("./network/routes");

db(
  "mongodb://db_user:123abc@cluster0-shard-00-00.hochh.mongodb.net:27017,cluster0-shard-00-01.hochh.mongodb.net:27017,cluster0-shard-00-02.hochh.mongodb.net:27017/telegram?ssl=true&replicaSet=atlas-lnnmdu-shard-0&authSource=admin&retryWrites=true&w=majority"
);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("la app esta escuchando en http://localhost:3000");
