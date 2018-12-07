/************************************************
 * Application:  NoDE
 * File:  backend/app/controllers/postController.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Controller for the posts
 * Related files: ../models/post.js
                  ../routers/endpoint.js
 *
 * Licensing Information
 ***********************************************/

const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

module.exports = ResourceController.extend ({
  Model: model ('post'),
  name: 'postController',
  
});