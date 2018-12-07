/************************************************
 * Application:  NoDE
 * File:  backend/app/controllers/profileController.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Controller for the user profile
 * Related files: ../models/profile.js
                  ../routers/
 *
 * Licensing Information
 ***********************************************/

const { model, Action } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

const profile = require('../models/profile'); 

module.exports = ResourceController.extend ({
  Model: model ('profile'),
  name: 'profileController',
  
  getOne()
  {
    return function(req, res)
    {
      {
        profile.findOne({ _id: req.user._id, }, function(error, profile)
        {
          if(error) //some server error
          {
            res.status(400).json(error);
          }
          else if(!profile) //404 not found
          {
            res.status(404).send("Profile Not found");
          }
          else //found
          {
            res.status(200).json({profile: profile});
          }
        });
      }
    };
  },
  
  create()
  {
    return function (req, res)
    {
      profile.create(req.body, function (error, profile)
      {
        if(error)
        {
          res.status(400).json(error);
        }
        else
        {
          profile.owner = req.user.id;
        }
      });
    };
  }
  
});