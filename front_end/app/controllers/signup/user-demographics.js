/************************************************
 * Application:  NOD
 * File:  app/controllers/signup/user-demographics.js
 * Author:
 * Creation Date: 23 Nov 2018
 * Feature: XX - user demographics Actions
 * Purpose: Actions associated with the user demographics route/template
 * Modification History:
 * - 23 Nov 2018 (xxx) - Initial build
 * --- TODO: This needs to be compared against user-information and Create Account
 * *********************************************/
import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  ajax: inject(),

  email: '',
  password1: '',
  password2: '',
  password: 'theValidatedPassword',
  first_name: '',
  last_name: '',
  zipcode: '',

  actions: {
    // gatekeeper code goes here

    executePost() {

      window.console.log(this.get('email'), this.get('password1'), this.get('password2'), this.get('first_name'), this.get('last_name'), this.get('zipcode'));
      return this.get('ajax').request('/user', {
        method: 'PUT',
        data: {
          client_id: '6bf5aef6859eab3befe6bd45',
          email: this.get('email'),
          password: this.get('password'),
          first_name: this.get('first_name'),
          last_name: this.get('last_name'),
          zipcode: this.get('zipcode')
        },
        host: 'http://localhost:5000'
      });
    }
  }
});
