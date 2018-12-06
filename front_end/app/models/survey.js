/************************************************
 * Application:  NOD
 * File:  app/models/profile.js
 * Author: Bard Polley
 * Creation Date: 17 Nov 2018
 * Feature: 83 -User Survey Data Model
 * Purpose: Data Model for survey information
 * Modification History:
 * - 17 Nov 2018 (bwp) - Initial build
 * Licensing Information
 ***********************************************/
import DS from 'ember-data';

export default DS.Model.extend({
  drinks: DS.attr('string'),
  smoker: DS.attr('boolean'),
  recreationalDrugs: DS.attr('boolean'),
  healthyDiet: DS.attr('number'),
  maritalStatus: DS.attr('string'),
  children: DS.attr('string'),
  educationLevel: DS.attr('string'),
  user: DS.belongsTo('user', {async: true})
});
