const {
  Controller,
  Action
} = require ('@onehilltech/blueprint');

/**
 * @class directDeposit
 */
module.exports = Controller.extend ({
	get () {
    return Action.extend ({
      /**
       * The execute(res, res) method is an abstract method that must be 
       * implemented by all Action subclasses. The execute(req, res) method
       * is responsible for handling the request by sending a response to
       * the client.       
       */
      execute (req, res) {
        res.status (200).send("Test worked");
      }
    });
  }
});
