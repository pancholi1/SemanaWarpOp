const db = require("../models");
const Poster = db.poster;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  try {
    const allPoster = await Poster.findAll({
      attributes: [
        'title', 'id', 'category', 'createdAt'
      ],
      order: [
        ['createdAt', 'DESC']
      ]
    })
    return res.send(allPoster);
  } catch (error) {
    res.status(500).send({
      message: "Error with the Posters" 
    });
  }
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const onePoster = await Poster.findByPk(id)
    res.send(onePoster);
  } catch (error) {
    res.status(500).send({
      message: "Error get Poster with id=" + id
    });
  }
};

// Create and Save a new Posters
exports.create = async (req, res) => {
  try {
    const newPoster = await Poster.create({
      ...req.body
    })
    return res.send(newPoster);
  } catch (error) {
    res.status(500).send({
      message: "Error creating Poster"
    });
  }
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    await Poster.update(req.body, {
      where: {
        id
      }
    })
    res.send({
      message: "Poster was updated successfully."
    })
  } catch (error) {
    res.status(500).send({
      message: "Error updating Poster with id=" + id
    });
  }
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Poster.destroy({
      where: {
        id
      }
    })
    return res.send({
      message: "Tutorial was deleted successfully!"
    })
  } catch (error) {
    res.status(500).send({
      message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
    });
  }
};