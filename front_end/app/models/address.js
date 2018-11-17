/************************************************
 * Application:  NOD
 * File:  app/models/profile.js
 * Author: Bard Polley
 * Creation Date: 17 Nov 2018
 * Feature: 81 -User Address Data Model
 * Purpose: Data Model for address-specific object
 * Modification History:
 * - 17 Nov 2018 (bwp) - Initial build
 * Licensing Information
 ***********************************************/
import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  state: DS.attr('string'),
  home: DS.attr('string'),
  user: DS.belongsTo('user', {async: true})
});
