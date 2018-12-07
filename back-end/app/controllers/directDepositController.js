/************************************************
 * Application:  NoDE
 * File:  backend/app/controllers/directDepositController.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Controller for the users' direct deposit info
 * Related files: ../models/directDeposit.js
                  ../routers/endpoint.js
 *
 * Licensing Information
 ***********************************************/

const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

module.exports = ResourceController.extend ({
  Model: model ('directDeposit'),
  name: 'directDepositController',
  
});