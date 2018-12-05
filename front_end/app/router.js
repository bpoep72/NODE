/************************************************
 * Application:  NOD
 * File:  app/router.js
 * Author:
 * Creation Date: 01 Nov 2018
 * Feature: Baseline
 *  22 -login route
 *  46 - onboarding route
 * Purpose: Free-flow text with gist of filename
 * Modification History:
 * - 01 Nov 2018 (bwp) - Initial build (no features)
 * - 05 Nov 2018 (bwp) - Added route for login
 * - 09 Nov 2018 (bwp) - Added route for onboarding
 * - 12 Nov 2018 (bwp) - Added routes for lifestyle survey
 * - 18 Nov 2018 (bwp) - Added routes for dash, profile
 *    post, account, calendar
 * - 26 Nov 2018 - Fixed route tree, reorganized in logical order
 * --- Fixed route for payment to nest correctly
 ***********************************************/

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('signup', function() {
    this.route('usertype');
    this.route('terms');
    this.route('user-demographics');
    this.route('user-information');
    this.route('create-account');
  });

  this.route('onboarding', function() {
    this.route('profile');
    this.route('lifestyle', function() {
      this.route('start');
      this.route('drink');
      this.route('smoke');
      this.route('drugs');
      this.route('diet');
      this.route('married');
      this.route('children');
    });
    this.route('medical');
    this.route('education');
    this.route('payment');
  });

  this.route('core', function() {
    this.route('dashboard');
    this.route('profile');
    this.route('post', { path: '/post/:post_id'});
    this.route('account');
    this.route('calendar');
  });

  this.route('reset-password');
});

export default Router;
