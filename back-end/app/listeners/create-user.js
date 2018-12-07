/************************************************
 * Application:  NoDE
 * File:  backend/app/listeners/create-user.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: General listener for the user creation
 *
 * Licensing Information
 ***********************************************/

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