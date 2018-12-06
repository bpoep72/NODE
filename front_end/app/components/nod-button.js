/* A re-usable button that performs an action when clicked

  Usage: 
  
  Example of how to tie this submit (fired on click) to an action in 
  the controller of the route where you are using the nod-button component
  ( Note: The action must live in the controller, not the route, 
    since deprecation tells us we must use closure actions now...)

  In Template
  ------------
  {{#nod-button submit=(action "myAction")}}
  {{/nod-button}}
  -------------

  In Controller
  --------------
  actions: {
    myAction() {  
      // Do your thing(s)
    }
  }
*/

import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['notBlue:nod-button-pink:nod-button-blue'],
  notBlue: true,
  title: '',

  click() {
    this.submit()
  //  this.sendAction('submit');  // Deprecated: use Closure Action instead  
  }

});
