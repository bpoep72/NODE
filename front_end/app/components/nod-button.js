import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['notBlue:nod-button-pink:nod-button-blue'],
  notBlue: true,
  title: '',

  click() {
    this.submit()
  }

});
