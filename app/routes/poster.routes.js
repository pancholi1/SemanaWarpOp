module.exports = app => {
  const posters = require("../controllers/poster.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", posters.create);

  // Retrieve all posters
  router.get("/", posters.findAll);

  // Retrieve all published posters
  router.get("/published", posters.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", posters.findOne);

  // Update a Tutorial with id
  router.put("/:id", posters.update);

  // Delete a Tutorial with id
  router.delete("/:id", posters.delete);

  // Delete all posters
  router.delete("/", posters.deleteAll);

  app.use('/api/poster', router);
};
