const express = require("express");
const router = express.Router(); //buscar en la documentacion
const response = require("./network/response");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router); //el ruter debe estar al final

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    custom: "Nuestro valor personalizado", // crear header personalizado
  });
  response.success(req, res, "lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  console.log(`mensaje ${req.body.text} añadido correctamente`);

  if (req.query.error == "ok") {
    // si la query "error" tiene el valor "ok"
    response.error(req, res, "error simmulado", 400);
  } else {
    response.success(req, res, "Mensaje agregado correctamente", 201);
  }
});

app.use("/app", express.static("public"));
app.listen(3000);
console.log("la app esta escuchando en http://localhost:3000");
