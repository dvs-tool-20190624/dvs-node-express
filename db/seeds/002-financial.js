exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("financial")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("financial").insert([
        { colName: "rowValue1" },
        { colName: "rowValue2" },
        { colName: "rowValue3" }
      ]);
    });
};
