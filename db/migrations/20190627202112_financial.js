//TABLE

exports.up = function(knex, Promise) {
  // migrating files- creating table
  return knex.schema.createTable("financial", table => {
    table.increments(); // will set up id column - auto increments
    table.text("required_cost").notNullable(); //must be required
    table.text("relocation_cost").notNullable(); //must be required
    table.text("content");
    table.float("amount");
    table.timestamps(true, true); // true for created at and true for updated
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  // runs when you roll back - revert
  return knex.schema.dropTable("financial");
};
