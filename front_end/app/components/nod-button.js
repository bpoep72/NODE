import Component from '@ember/component';

export default Component.extend({
  classNames: ['nod-button'],
  title: 'Button',

  click() {
    this.submit()
  }

});
