exports.seed = function(knex, Promise) {
  return knex("items")
    .del()
    .then(function() {
      return knex("items").insert([
        {
          url:
            "https://cdna.lystit.com/photos/mytheresa/UKP00210062-white-68e1cb2f-.jpeg",
          name: "Yeezy Distressed Wool-Blend Sweater (Season 3)",
          description: "gwwgw"
        },
        {
          url:
            "https://cdn.shopify.com/s/files/1/0418/2345/products/Screen_Shot_2017-02-02_at_11_57_16_am_png_540x.jpg?v=1499672373",
          name: "Nudie Jeans Brute Knut Pitch White",
          description: "fwefwefw"
        },
        {
          url:
            "https://external.viverni.net/eu/media/www/eu/image/product/88254/md/selected-mens-wool-jacket-mercer-db-pea-coat-id-16031913-light-grey-melange.jpg",
          name: " Wool Jacket Mercer DB Pea Coat Light Grey Melange",
          description: "wwvvvvvwvv"
        },
        {
          url:
            "https://smhttp-ssl-33667.nexcesscdn.net/media/catalog/product/cache/1/small_image/533x/040ec09b1e35df139433887a97daa66f/n/u/nudie-jeans-co-lean-dean-sliver-lake-jeans-blue-1630110211865_075.jpg",
          name: "Nudie Jeans Lean Dean Sliver Lake Jeans Blue",
          description: "Blue Jeans"
        },
        {
          url: "http://www.amsanjuan.com/images/pic/fbF0bRs4-153.jpg",
          name: "Superdry Meteor Chelsea Boots",
          description: "Grey Suede"
        },
        {
          url:
            "https://bvllin.com/wp-content/uploads/2016/09/Navy-baseball-768x576.png",
          name: "B’s Baseball Cap",
          description: "Navy Blue Baseball Cap,"
        },
        {
          url:
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/9/_102682009.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg",
          name: "Champion Hoodie",
          description: "Champion Snoopy Unisex Pullover"
        }
      ]);
    });
};
