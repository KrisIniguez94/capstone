exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("images_items", function(table) {
      table.increments();
      table.integer("image_id").references("images.id");
      table.integer("item_id").references("items.id");
      table.integer("description_id").references("descriptions_id");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("images_items")]);
};
