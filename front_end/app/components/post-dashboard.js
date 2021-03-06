/* Application:  NOD
* File:  app/components/post-dashboard.js
* Author: Bard Polley
* Creation Date: 28 Nov 2018
* Feature: 117 - Component view for dashboard GUI
* Purpose: Component for use in dashboard GUI
* Modification History:
  * - 28 Nov 2018 (bwp) - Initial build
***********************************************/
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  classNames: ['post-dashboard'],

  click() {
    this.get('router').transitionTo('/core/post/' + this.id)
  }

});
