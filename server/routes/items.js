var express = require("express");
var router = express.Router();
var knex = require("../../db/knex");

router.post("/favorites/:id", (req, res, next) => {
  knex("items_users")
    .insert({ item_id: req.params.id, user_id: 1 })
    .then(() => {
      knex("items_users")
        .orderBy("id", "desc")
        .then(item => res.json(item));
    });
});
module.exports = router;
