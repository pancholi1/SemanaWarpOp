module.exports = app => {
  const posters = require("../controllers/poster.controller.js");

  var router = require("express").Router();

  // Retrieve all posters
  router.get("/", posters.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", posters.findOne);

  // Create a new Tutorial
  router.post("/", posters.create);
  
  // Update a Tutorial with id
  router.put("/:id", posters.update);



  // Delete a Tutorial with id
  router.delete("/:id", posters.delete);

  // Delete all posters


  app.use('/post', router);
};
