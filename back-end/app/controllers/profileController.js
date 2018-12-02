const { model, Action } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

const profile = require('../models/profile'); 

module.exports = ResourceController.extend ({
  Model: model ('profile'),
  name: 'profileController',
  
  getOne()
  {
    return Action.extend
    ({
      execute (req, res)
      {
        profile.findOne({ owner: req.user._id, }, function(error, profile)
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
            res.status(200).json(profile);
          }
        });
      }
    });
  },
  
  create()
  {
    return Action.extend
    ({
      execute(req, res)
      {
        //TODO make this
      }
    });
  }
  
});