// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Characters = sequelize.define("character", {
  routeName: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  forcePoints: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
});

// Syncs with DB
Characters.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Characters;
