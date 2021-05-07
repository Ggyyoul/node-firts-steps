//recibe las peticiones http y las envia al controlador
const express = require("express");
const response = require("../../network/response");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.headers);
  res.header({
    custom: "Nuestro valor personalizado", // crear header personalizado
  });
  response.success(req, res, "lista de mensajes");
});

router.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  console.log(`mensaje ${req.body.text} añadido correctamente`);

  if (req.query.error == "ok") {
    // si la query "error" tiene el valor "ok"
    response.error(
      req,
      res,
      "error inesperado",
      500,
      "es solo una simulacion de los errores"
    );
  } else {
    response.success(req, res, "Mensaje agregado correctamente", 201);
  }
});

module.exports = router;
