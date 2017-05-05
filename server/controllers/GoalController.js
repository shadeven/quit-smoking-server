const Goal = require('../models').Goal;
const Action = require('../models').Action;

module.exports = {

  createGoal: function(req, res) {
    if (!req.body.name) {
      return res.status(400).send('Name can not be empty.');
    }

    return Goal.create({
      name: req.body.name,
      description: req.body.description
    })
    .then(goal => res.status(201).send(goal))
    .catch(error => res.status(400).send(error));
  },

  getAllGoal: function(req, res) {
    return Goal.findAll({
        include: [{
          model: Action,
          as: 'actions'
        }],
        order: [
          ['id', 'ASC']
        ]
    })
    .then(goals => {
      console.log(goals);
      res.status(201).send(goals);
    })
    .catch(error => res.status(400).send(error));
  },

  findGoalById: function(req, res) {
    return Goal.findById(req.params.id)
    .then(goal => {
      if (goal) {
        res.status(201).send(goal);
      } else {
        res.status(400).send('No goal found');
      }
    })
    .catch(error => res.status(400).send(error));
  },
  
  deleteGoalById: function(req, res) {
    return Goal.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(deleted => {
        res.status(200).json({message: 'Deleted successfully'});
      })
      .catch(error => res.status(400).send(error));
  }
};
