const Goal = require('../models').Goal;

module.exports = {

  create(req, res) {
    if (!req.body.name) {
      return res.status(400).send('Name can not be empty.');
    }

    return Goal.create({
      name: req.body.name,
    })
    .then(goal => res.status(201).send(goal))
    .catch(error => res.status(400).send(error));
  },
};
