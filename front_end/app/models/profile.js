/************************************************
 * Application:  NOD
 * File:  app/models/profile.js
 * Author: Bard Polley
 * Creation Date: 17 Nov 2018
 * Feature: 79 -User Profile Data Model
 * Purpose: Data Model for profile-specific object
 * Modification History:
 * - 17 Nov 2018 (bwp) - Initial build
 *  - Updated for inclusion of personal information
 * - 01 Dec 2018 (bwp) - added additional fields for e-mail and image
 ***********************************************/
import DS from 'ember-data';

export default DS.Model.extend({

  fname: DS.attr('string'),
  lname: DS.attr('string'),
  email: DS.attr('string'),
  age: DS.attr('number'),
  gender: DS.attr('string'),
  ethnicity: DS.attr('string'),
  orientation: DS.attr('string'),
  height: DS.attr('string'),
  weight: DS.attr('string'),
  user: DS.belongsTo('user', {async: true})
});
