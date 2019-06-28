//TABLE

exports.up = function (knex, Promise) { // migrating files- creating table
    return knex.schema.createTable("financial", (table) => {
    
        table.increments(); // will set up id column - auto increments
        table.string('item');
        table.string('amount');
        table.timestamps(true, true); // true for created at and true for updated 
     

  
    });
};

exports.down = function (knex, Promise) { // runs when you roll back - revert
    return knex.schema.dropTable("financial");
};
