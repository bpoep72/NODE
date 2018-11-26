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
 * Licensing Information
 ***********************************************/

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('onboarding', function() {

    this.route('survey', function() {
      this.route('userinfo', function() {
      });
      this.route('lifestyle', function() {
        this.route('index');
        this.route('alcohol');
        this.route('medical');
        this.route('education');
        this.route('payment');
        this.route('smoking');
        this.route('marital');
        this.route('diet');
        this.route('drugs');
        this.route('children');
      });
    });
  });

  this.route('create-account');

  this.route('core', function() {
    this.route('dashboard');
    this.route('profile');
    this.route('post');
    this.route('account');
    this.route('calendar');
  });
  //  this.route('core');

  this.route('signup', function() {
    this.route('usertype');
    this.route('terms');
    this.route('user-demographics');
    this.route('user-information');
    this.route('create-account');
  });
  //  this.route('signup');
});

export default Router;
