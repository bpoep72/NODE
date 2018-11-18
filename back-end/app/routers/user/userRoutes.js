
const { Router } = require ('@onehilltech/blueprint');

module.exports = Router.extend ({
    specification: {
        '/user': {
            resource: {
                controller: 'userController'
            }
        }
    }
});