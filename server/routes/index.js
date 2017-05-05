const goalController = require('../controllers').goal;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Goals API!',
  }));

  app.post('/api/createGoal', goalController.createGoal);
  app.delete('/api/deleteGoalById/:id', goalController.deleteGoalById);
  app.get('/api/getAllGoal', goalController.getAllGoal);
  app.get('/api/findGoalById/:id', goalController.findGoalById);

};
