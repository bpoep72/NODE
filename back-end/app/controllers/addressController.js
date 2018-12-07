/************************************************
 * Application:  NoDE
 * File:  backend/app/controllers/addressController.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Controller for the users' addresses
 * Related files: ../models/address.js
                  ../routers/endpoint.js
 *
 * Licensing Information
 ***********************************************/

const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

module.exports = ResourceController.extend ({
  Model: model ('address'),
  name: 'addressController',
  
});