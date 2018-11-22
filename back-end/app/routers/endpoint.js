
const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;
const cors = require('cors');



//currently not in use
const corsOptions = {
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    origin: "*",
    preflightContinue: true,
    credentials: true,
};

module.exports = Router.extend ({
    specification : {
        '/':
        {
            use: [cors(corsOptions)],
        },
        '/gatekeeper': blueprint.mount('@onehilltech/blueprint-gatekeeper:v1'),
        '/user': {
            policy: 'gatekeeper.auth.bearer',
            resource: {
                controller: 'userController'
            }
        },
        '/post': {
            policy: 'gatekeeper.auth.bearer',
            /* TODO: implement postController
            resource: {
                controller: 'postController',
            }
            */
        },
    }
});