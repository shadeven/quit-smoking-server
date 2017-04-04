const Goal = require('../models').Goal;

module.exports = {

  createGoal(req, res) {
    if (!req.body.name) {
      return res.status(400).send('Name can not be empty.');
    }

    return Goal.create({
      name: req.body.name,
    })
    .then(goal => res.status(201).send(goal))
    .catch(error => res.status(400).send(error));
  },

  getAllGoal(req, res) {
    return Goal.findAll()
    .then(goals => res.status(201).send(goals))
    .catch(error => res.status(400).send(error));
  },

  findGoalById(req, res) {
    return Goal.findById(req.params.id)
    .then(goal => {
      if (goal) {
        res.status(201).send(goal);
      } else {
        res.status(400).send('No goal found');
      }
    })
    .catch(error => res.status(400).send(error));
  }

};
