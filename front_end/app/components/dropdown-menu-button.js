import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  classNames: ['dropdown-menu-button'],
  target: 'core',

  click() {
    this.get('router').transitionTo(this.target)
    this.select()
  }
  
});
