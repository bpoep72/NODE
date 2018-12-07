/************************************************
 * Application:  NoDE
 * File:  backend/app/config/gatekeeper.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Define general configuration properties for gatekeeper
 *
 * Licensing Information
 ***********************************************/

module.exports = {
    tokens: {
        $: {
            issuer: 'group4Node',
            expiresIn: '4h',
            algorithm: 'HS256',
            secret: 'sstssh'
        }
    }
}