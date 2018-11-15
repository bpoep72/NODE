const {
  Controller,
  Action
} = require ('@onehilltech/blueprint');

/**
 * @class user
 */

const {ResourceController} = require ('@onehilltech/blueprint-mongodb');
const {model} = require ('@onehilltech/blueprint');

module.exports = ResourceController.extend ({
  model: model ('user')
});