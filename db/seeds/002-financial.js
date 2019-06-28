exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("financial")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("financial").insert([
        {
          required_cost: "transportation",
          amount: "",
          required_cost: "food",
          amount: "",
          required_cost: "health insurance",
          amount: "",
          required_cost: "car insurance",
          amount: "",
          required_cost: "personal loans",
          amount: "",
          required_cost: "childcare",
          amount: "",
          required_cost: "other",
          amount: "",

          relocation_cost: "hotel while in transit",
          amount: "",
          relocation_cost: "new rental deposit",
          amount: "",
          relocation_cost: "utility hook-up",
          amount: "",
          relocation_cost: "storage",
          amount: "",
          relocation_cost: "new monthly rent",
          amount: "",
          relocation_cost: "hotel while in transit",
          amount: "",
          relocation_cost: "hotel while in transit",
          amount: "",
          relocation_cost: "hotel while in transit",
          amount: "",
          relocation_cost: "hotel while in transit",
          amount: "",
          relocation_cost: "Car Rental",
          amount: "",
          relocation_cost: "Gas",
          amount: "",
          relocation_cost: "Fees",
          amount: "",
          relocation_cost: "Moving Truck Rental",
          amount: "",
          relocation_cost: "Moving Truck Gas",
          amount: "",
          relocation_cost: "Mental Health Treatment",
          amount: "",
          relocation_cost: "Additional Security",
          amount: "",
          relocation_cost: "Income Sources",
          amount: "",
          relocation_cost: "Benefits",
          amount: "",
          relocation_cost: "Cash Aid",
          amount: "",
          relocation_cost: "Food Stamps",
          amount: "",
          relocation_cost: "Assistance from Charities",
          amount: "",
          relocation_cost: "Job expenses ",
          amount: ""
        }
      ]);
    });
};
