/************************************************
 * Application:  NoDE
 * File:  backend/app/config/server.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Define general configuration properties for the server
 *
 * Licensing Information
 ***********************************************/

module.exports = {
  protocols : {
    http : {
      port: 5000
    }
  },

  middleware : {
    validator  : { },
    bodyParser : {
      urlencoded : { extended: false },
      json : { }
    },

    morgan: {
      format: 'dev',
      immediate: true
    }
  }
};
