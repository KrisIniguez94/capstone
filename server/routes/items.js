var express = require("express");
var router = express.Router();
var knex = require("../../db/knex");

router.get("/favorites", (req, res, next) => {
  knex("items_users")
    .where({ user_id: 1 })
    .then(response => {
      res.json({ items: response });
    });
});
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
    .where({ item_id: req.params.id, user_id: 1 })
    .del()
    .then(response => {
      res.json(response);
    });
});

module.exports = router;
