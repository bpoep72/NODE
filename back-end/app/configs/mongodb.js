/************************************************
 * Application:  NoDE
 * File:  backend/app/config/mongodb.js
 * Author: 
 * Creation Date: 2018-11-14
 * Purpose: Define general configuration properties for MongoDB Atlas
 *
 * Licensing Information
 ***********************************************/

module.exports = {
    connections: {
        $default: {
            uri: 'mongodb+srv://group4node:group4Node!@cluster0-aogrt.mongodb.net/test?retryWrites=true',
            seed: true,
            options: {useNewUrlParser: true}
        },
    }
};