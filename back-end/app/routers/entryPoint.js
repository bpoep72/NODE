
const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;
const cors = require('cors');

const corsOptions = {
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
};

module.exports = Router.extend ({
    specification : {
        '/' : { use: [cors (corsOptions)]},
        '/gatekeeper': blueprint.mount('@onehilltech/blueprint-gatekeeper:v1'),
        '/user': {
            //policy: 'gatekeeper.auth.bearer',
            resource: {
                controller: 'userController'
            }
        }
    }
});