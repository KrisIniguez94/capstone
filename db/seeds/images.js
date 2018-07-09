exports.seed = function(knex, Promise) {
  return knex("images")
    .del()
    .then(function() {
      return knex("images").insert([
        {
          url:
            "https://media.gq.com/photos/5776ca8ae2724dae2eb43a9f/master/pass/Kanye-West-Style-2016-06-20-16.jpg",
          title: "Seed01"
        },
        {
          url:
            "http://www.royalfashionist.com/wp-content/uploads/2017/09/proportion.jpg",
          title: "Seed02"
        },
        {
          url:
            "http://static.fashionbeans.com/wp-content/uploads/2016/01/streetlook1.jpg",
          title: "Seed03"
        },
        {
          url:
            "https://smhttp-ssl-33667.nexcesscdn.net/media/streetstyle/cache/321x/MSS40_3854.jpg",
          title: "Seed04"
        },
        {
          url:
            "https://media.wmagazine.com/photos/5951505f2880820e464b2c85/master/pass/Unknown.jpeg",
          title: "Seed05"
        },
        {
          url:
            "http://3qtu1m3ypm5t4vj8530cfjbq.wpengine.netdna-cdn.com/wp-content/uploads/2017/09/hoodie-333x500@2x.jpg",
          title: "Seed06"
        }
      ]);
    });
};
