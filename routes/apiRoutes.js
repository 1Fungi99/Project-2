var db = require("../models");

module.exports = function (app) {
  // Get all users 
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (data) {
      res.json(data);
    });
  });
  //to get all the story data 
  app.get("/api/story", function (req, res) {
    db.Story.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // Create a new story
  app.post("/api/compose", function (req, res) {
    db.Story.create(req.body).then(function (dbStory) {
      res.json(dbStory);
    });
  });

  // Delete a story by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Submitting sign up information
  app.post("/api/new", function (req, res) {

    console.log('Login data collected: ' + req.body);

    User.create({
      username: req.body.username,
      pass: req.body.pass,
      fname: req.body.fname,
      middle_initial: req.body.middle_initial,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      description: req.body.description

    });

  });
};
