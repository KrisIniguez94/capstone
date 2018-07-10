exports.seed = function(knex, Promise) {
  return knex("items")
    .del()
    .then(function() {
      return knex("items").insert([
        {
          url:
            "https://cdna.lystit.com/photos/mytheresa/UKP00210062-white-68e1cb2f-.jpeg",
          name: "Yeezy Distressed Wool-Blend Sweater (Season 3)"
        },
        {
          url:
            "https://cdn.shopify.com/s/files/1/0418/2345/products/Screen_Shot_2017-02-02_at_11_57_16_am_png_540x.jpg?v=1499672373",
          name: "Nudie Jeans Brute Knut Pitch White"
        }
      ]);
    });
};
