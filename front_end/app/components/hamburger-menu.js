import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['isOpen:hamburger-menu-open:hamburger-menu'],
  isOpen: false,

  click() {
    this.toggleProperty('isOpen')
  }
});
