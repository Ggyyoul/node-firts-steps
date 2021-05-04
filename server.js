const express = require("express");
const router = express.Router(); //buscar en la documentacion

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router); //el ruter debe estar al final

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    custom: "Nuestro valor personalizado", // crear header personalizado
  });
  res.send("lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  console.log(`mensaje ${req.body.text} añadido correctamente`);

  //Tpos de respuestas
  //res.send(); vacia
  //res.status(201).send(); estado
  res.status(201).send({
    error: "",
    body: "Created correctly",
  });
});

app.listen(3000);
console.log("la app esta escuchando en http://localhost:3000");
