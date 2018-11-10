/************************************************
 * Application:  NOD
 * File:  app/models/user.js
 * Author: Bard Polley
 * Creation Date: 08 Nov 2018
 * Feature: 21 -User Data Model
 * Purpose: Login route / path for application
 * Modification History:
 * - 08 Nov 2018 (bwp) - Initial build
 * Licensing Information
 ***********************************************/

import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr('string'),
  passWord: DS.attr('string')


});
