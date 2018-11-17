
const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;

const {cors} = require = ('@onehilltech/blueprint-gatekeeper');

module.exports = Router.extend ({
    specification: {
        '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:v1'),
        
        '/endpoint': {
            policy: 'gatekeeper.auth.bearer'
        },
        
        '/user': {
            policy: 'gatekeeper.auth.bearer'
        }
    }
});