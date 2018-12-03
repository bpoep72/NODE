
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
    preflightContinue: false,
    credentials: true,
};

module.exports = Router.extend ({
    specification :
    {
        '/': //cors to enable use across all sub domains
        {
            use: [cors(corsOptions)],
        },
        '/gatekeeper': //gatekeeper mount point
            blueprint.mount('@onehilltech/blueprint-gatekeeper:v1'),

        /*
         *start of gatekeeper protected routes
         */
        '/post':
        {
            policy: 'gatekeeper.auth.bearer',
            resource:
            {
                controller: 'postController',
                allow: ['create', 'getOne', 'getAll', 'delete', 'update'],
            },
        },
        '/address':
        {
            policy: 'gatekeeper.auth.bearer',
            resource:
            {
                controller: 'addressController',
                allow: ['create', 'getOne', 'delete', 'update'],
            },
        },
        '/directDeposit':
        {
            policy: 'gatekeeper.auth.bearer',
            resource:
            {
                controller: 'directDepositController',
                allow: ['create', 'getOne', 'delete', 'update'],
            },
        },
        '/profiles':
        {
            policy: 'gatekeeper.auth.bearer',
            resource:
            {
                controller: 'profileController',
                //TODO: remove getAll before merge to master
                allow: ['create', 'getOne', 'delete', 'update', 'getAll'],
            },
        },
        '/survey':
        {
            policy: 'gatekeeper.auth.bearer',
            resource:
            {
                controller: 'surveyController',
                allow: ['create', 'getOne', 'delete', 'update'],
            }
        }
    }
});