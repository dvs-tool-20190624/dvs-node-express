//TABLE

exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", users => {
    //Table name
    users.increments(); // primary

    users
      .string("username", 128) //username
      .notNullable()
      .unique()
      .references("id"); //foreign key

    users
      .string("password", 128) //password
      .notNullable();

    users
      .string("firstName") //full name
      .notNullable();

    users
      .string("lastName") //last  name
      .notNullable();

    users
      .string("email") //email
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
