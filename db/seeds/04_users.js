exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "iniguezkris", hashed_password: "1234" },
        { id: 2, username: "iniguezandre", hashed_password: "4321" }
      ]);
    });
};
