/************************************************
 * Application:  NoDE
 * File:  backend/app/controllers/surveyController.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Controller for the users' onboarding survey
 * Related files: ../models/survey.js
                  ../routers/endpoint.js
 *
 * Licensing Information
 ***********************************************/

const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

module.exports = ResourceController.extend ({
  Model: model ('survey'),
  name: 'surveyController',
  
});