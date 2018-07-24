exports.up = function(knex, Promise) {
  return knex.schema.createTable("images", table => {
    table.increments();
    table.string("url");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("images");
};
