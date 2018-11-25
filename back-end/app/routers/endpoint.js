
/*
 *This file generates the core access points for items
 *accessable via the blueprint.js server side application.
 *Cors is utilized to enable requests across domains and
 *implemented using the Node.js Express.js library.
 *Additionally the site handles authentication of users
 *via the blueprint-gatekeeper.js library extension also
 *developed by @onehilltech github and is mounted on the
 * /gatekeeper directory.
 */

const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;
const cors = require('cors');

//http header options for requests to blueprint
const corsOptions = {
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    origin: "*",
    preflightContinue: true,
    credentials: true,
};

module.exports = Router.extend ({
    specification : {
        '/': //cors to enable use across all sub domains
        {
            use: [cors(corsOptions)],
        },
        '/gatekeeper': //gatekeeper mount point
            blueprint.mount('@onehilltech/blueprint-gatekeeper:v1'),
        
        /*
         *start of gatekeeper protected routes
         */
        '/user': { //user sub directory
            policy: 'gatekeeper.auth.bearer',
            resource: {
                controller: 'userController'
            }
        },
        '/post': { //post sub directory
            policy: 'gatekeeper.auth.bearer',
            /* TODO: implement postController
            resource: {
                controller: 'postController',
            }
            */
        },
    }
});