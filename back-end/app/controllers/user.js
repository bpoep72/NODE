const { Controller, Action } = require ('@onehilltech/blueprint');
const {ResourceController} = require ('@onehilltech/blueprint-mongodb');

/**
 * @class user
 */

const {model} = require ('@onehilltech/blueprint');

module.exports = ResourceController.extend ({
  model: model ('user'),
  
  create () {
    return this._super (this) ({
      prepareDocument(req, doc) {
        doc.user = req.user._id;
        return doc;
      }
    });
  }
});