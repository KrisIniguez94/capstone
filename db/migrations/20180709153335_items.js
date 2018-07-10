exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", function(table) {
    table.increments();
    table.string("url");
    table.string("name");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("items");
};
