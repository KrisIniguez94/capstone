let connectionString =
  process.platform === "win32"
    ? "postgres://postgres:root@localhost/mogul"
    : "postgres://localhost/mogul";

module.exports = {
  development: {
    client: "pg",
    connection: connectionString,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  production: {
    client: "pg",
    connection:
      process.env.DATABASE_URL || "postgres://postgres:root@localhost/mogul",
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/production"
    }
  }
};
