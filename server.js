const express = require("express");
const router = express.Router(); //buscar en la documentacion

let app = express();

app.use(router);

router.get("/message", (req, res) => {
  res.send("lista de mensajes");
});

router.post("/message", (req, res) => {
  res.send("mensaje agregado");
});
app.listen(3000);
console.log("la app esta escuchando en http://localhost:3000");
