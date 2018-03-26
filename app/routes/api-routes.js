// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Characters = require("../models/characters.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function (req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      Characters.findAll({ where: {'routeName': req.params.characters}}).then(function (data) {
        res.json(data);
      });
      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)

    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      Characters.findAll({}).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {

    // Take the request...
    var character = req.body;
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();

    Characters.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    })

    // Then send it to the ORM to "save" into the DB.
  });
};
