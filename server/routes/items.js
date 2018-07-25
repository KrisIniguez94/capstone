var express = require("express");
var router = express.Router();
var knex = require("../../db/knex");

router.post("/favorites/:id", (req, res, next) => {
  knex("items_users")
    .insert({ item_id: req.params.id, user_id: 1 })
    .returning("id")
    .then(response => {
      res.json(response);
    });
});

router.delete("/favorites/:id", (req, res, next) => {
  knex("items_users")
    .del()
    .where("id", req.params.id)
    .then(response => {
      res.json(response);
    });
});

module.exports = router;
