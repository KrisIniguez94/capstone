exports.seed = function(knex, Promise) {
  return knex("images_items")
    .del()
    .then(function() {
      return knex("images_items").insert([
        { image_id: 1, item_id: 1 },
        { image_id: 1, item_id: 2 },
        { image_id: 2, item_id: 3 },
        { image_id: 2, item_id: 4 },
        { image_id: 2, item_id: 5 },
        { image_id: 2, item_id: 6 },
        { image_id: 2, item_id: 7 }
      ]);
    });
};
