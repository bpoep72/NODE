/************************************************
* Application:  NOD
* File:  app/components/post-details-button.js
* Author:
* Creation Date: 04 Dec 2018
* Feature: 113 - Dashboard Route - transition to post route
* Purpose: Handlebar Script for dashboard route
* Modification History:
* - 04 Dec 2018 (bwp) - Initial page -- transitions to core/post, but the specific
*     page needs to be incorporated into the target route
*   (TODO: At this point, still need to tie the correct post to the component)
*   (TODO: /core/post page needs to be built out with component or field data)

* SHOULD BE ABLE TO REMOVE THIS COMPONENT NOW
***********************************************/

import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  classNames: ['post-details-button'],
  title: 'Button', // title field is temporary until we get icons
  target: 'core.post',

  click() {
    this.get('router').transitionTo(this.target)
    this.select()
  }
  
});
