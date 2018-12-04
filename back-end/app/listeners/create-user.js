
const { Listener, model } = require('@onehilltech/blueprint');

module.exports = Listener.extend ({
    User: model ('profile'),
    
    handleEvent(account)
    {
        return this.User.create(
            {
                _id: account._id,
            });
    }
});