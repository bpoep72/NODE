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
//  postId: DS.attr('string'),
//  image: DS.attr('image'),
//  title: DS.attr('string'),
//  description: DS.attr(''),
//  comments: DS.attr(''),
//  rating: DS.attr('number'),
  dateMade: DS.attr('date'),
  content: DS.attr('string'),
  owner: DS.attr('string'),
//  payRate: DS.attr('number')
});

