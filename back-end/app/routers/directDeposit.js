const { Router } = require ('@onehilltech/blueprint');
​
module.exports = Router.extend ({
  specification: {
    '/direct': {
      // post: { action: 'message@create' }
      get: { res.send('Hello'); }
    }
  }
});