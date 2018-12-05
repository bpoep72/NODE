/************************************************
 * Application:  NOD
 * File:  app/models/post.js
 * Author: Bard Polley
 * Creation Date: 18 Nov 2018
 * Feature: 95 -Research Post Data Model
 * Purpose: Data Model for research posts
 * Modification History:
 * - 18 Nov 2018 (bwp) - Initial build
 ***********************************************/

import DS from 'ember-data';

export default DS.Model.extend({
  dateMade: DS.attr('date').______getType,
  description: DS.attr(''),
  owner: DS.attr('string'),
  title: DS.attr('string'),
  comments: DS.attr(''),
  rating: DS.attr('number'),
  endDate: DS.attr('date'),
  payType: DS.attr('number'),
  payRate: DS.attr('number')
});

