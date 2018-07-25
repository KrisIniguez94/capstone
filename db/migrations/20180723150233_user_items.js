exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("items_users", function(table) {
      table.increments();
      table.integer("user_id").references("users.id");
      table.integer("item_id").references("items.id");
      table.unique(["user_id", "item_id"]);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("items_users")]);
};
