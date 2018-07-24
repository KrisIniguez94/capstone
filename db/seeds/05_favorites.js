exports.seed = function(knex, Promise) {
  return knex("items_users")
    .del()
    .then(function() {
      return knex("items_users").insert([
        { user_id: 1, item_id: 1 },
        { user_id: 1, item_id: 2 }
      ]);
    });
};
