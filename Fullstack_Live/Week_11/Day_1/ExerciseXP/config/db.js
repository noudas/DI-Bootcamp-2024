// Import the knex library, a SQL query builder for Node.js
const knex = require("knex");

// Import and load environment variables from a .env file
require("dotenv").config();

// Destructure environment variables for database connection
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

// Create and configure a knex instance for connecting to a PostgreSQL database
const db = knex({
  // Specify the database client to use (PostgreSQL in this case)
  client: "pg",

  // Provide connection details to the database
  connection: {
    // Hostname of the database server
    host: PGHOST,

    // Port number for the database connection
    port: PGPORT,

    // Username for database authentication
    user: PGUSER,

    // Name of the target database
    database: PGDATABASE,

    // Password for database authentication
    password: PGPASSWORD,

    // Enable SSL connection with specific options
    ssl: { 
      // Disable strict SSL certificate validation
      rejectUnauthorized: false 
    },
  },
});

// Export the configured knex instance for use in other parts of the application
module.exports = db;
