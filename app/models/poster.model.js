module.exports = (sequelize, Sequelize) => {
  const Poster = sequelize.define("poster", {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    }
  });
  return Poster;
};
