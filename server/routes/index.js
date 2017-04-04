const goalController = require('../controllers').goal;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Goals API!',
  }));

  app.post('/api/goal', goalController.create);
};
