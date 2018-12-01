import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['isOpen:dropdown-menu-open:dropdown-menu'],
  isOpen: false,
  selected: 'Dashboard',

  actions: {
    retract() {
      this.toggleProperty('isOpen')
    }
  }
});
