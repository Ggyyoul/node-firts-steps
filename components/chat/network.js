const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", (req, res) => {
  controller
    .addChat(req.body.users)
    .then((users) => {
      response.success(req, res, users, 201);
    })
    .catch((e) => {
      response.error(req, res, "Error en los usuarios", 400, e);
    });
});

module.exports = router;
