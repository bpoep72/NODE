/************************************************
 * Application:  NOD
 * File:  app/routes/login.js
 * Author:
 * Creation Date: 05 Nov 2018
 * Feature: 22 -login route
 * Purpose: Login route / pash for application
 * Modification History:
 * - 05 Nov 2018 (bwp) - Initial build
 * Licensing Information
 ***********************************************/

import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({

    
    // ajax post of username and password
    // validity check
    // get user id from backend
    // store it somewhere i have access to it (model that I access)

    ajax: inject(),

    // Fix the data section!!

    model() {

        return this.get('ajax').request('/user', {
            method: 'POST',
            data: {
                email: valueEml,
                password: valuePwd  
            },
            host: 'localhost:5000'
        });

    }


});
