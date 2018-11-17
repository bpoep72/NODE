
const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;

module.exports = Router.extend ({
    specification: {
        '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:v1'),
        
        '/endpoint': {
            policy: 'gatekeeper.auth.bearer'
        }
    }
});