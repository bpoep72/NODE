const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

module.exports = ResourceController.extend
({
    Model: model ('user'),
    
    create()
    {
        return this._super (this).extend
        ({
            prepareDocument (req, doc)
            {
                doc.user = req.user._id;
                return doc;
            }
        });
    }
});