exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "iniguezkris", password: "1234" },
        { id: 2, username: "iniguezandre", password: "4321" }
      ]);
    });
};
