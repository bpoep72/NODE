
const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;
const { cors } = require('@onehilltech/blueprint-gatekeeper');

//currently not in use
const corsOptions = {
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
};

module.exports = Router.extend ({
    specification : {
        '/': {
            use: [cors()]
        },
        '/gatekeeper': blueprint.mount('@onehilltech/blueprint-gatekeeper:v1'),
        '/user': {
            policy: 'gatekeeper.auth.bearer',
            resource: {
                controller: 'userController'
            }
        },       
    }
});