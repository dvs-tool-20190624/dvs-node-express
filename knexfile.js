// Update with your config settings.
module.exports = {
  /// below is knexConfig
  development: {
    //kenxConfig.development
    client: "sqlite3",
    connection: {
      // connecting path to the database
      filename: "./db/auth.db3"
    },
    useNullAsDefault: true,
    migrations: {
      // connection path to the tables
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};
