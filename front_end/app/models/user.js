/************************************************
 * Application:  NOD
 * File:  app/models/user.js
 * Author: Bard Polley
 * Creation Date: 08 Nov 2018
 * Feature: 21 -User Data Model
 *          79 - User Profile model
 *          81 - User Address model
 * Purpose: Login route / path for application
 * Modification History:
 * - 08 Nov 2018 (bwp) - Initial build
 * - 17 Nov 2018 (bwp) - Added 1-to-1 for profile
 * Licensing Information
 ***********************************************/

import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string')
  
  // Peter: I think this is only if we're actually storing these within the user
/*   profile: DS.belongsTo('profile'),
  address: DS.belongsTo('address'),
  survey: DS.belongsTo('survey') */
});
