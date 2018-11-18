
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');
const { model } = require ('@onehilltech/blueprint');

module.exports = ResourceController.extend ({
  
  name: 'userController',

  Model: model('user')
  
});