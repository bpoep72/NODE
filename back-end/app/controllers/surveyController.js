const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

module.exports = ResourceController.extend ({
  Model: model ('survey'),
  name: 'surveyController',
  
});