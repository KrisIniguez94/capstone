exports.seed = function(knex, Promise) {
  return knex("images")
    .del()
    .then(function() {
      return knex("images").insert([
        {
          url:
            "https://media.gq.com/photos/5776ca8ae2724dae2eb43a9f/master/pass/Kanye-West-Style-2016-06-20-16.jpg"
        },
        {
          url:
            "http://www.royalfashionist.com/wp-content/uploads/2017/09/proportion.jpg"
        },
        {
          url:
            "http://static.fashionbeans.com/wp-content/uploads/2016/01/streetlook1.jpg"
        },
        {
          url:
            "https://smhttp-ssl-33667.nexcesscdn.net/media/streetstyle/cache/321x/MSS40_3854.jpg"
        },
        {
          url:
            "https://media.wmagazine.com/photos/5951505f2880820e464b2c85/master/pass/Unknown.jpeg"
        },
        {
          url:
            "http://3qtu1m3ypm5t4vj8530cfjbq.wpengine.netdna-cdn.com/wp-content/uploads/2017/09/hoodie-333x500@2x.jpg"
        }
      ]);
    });
};
