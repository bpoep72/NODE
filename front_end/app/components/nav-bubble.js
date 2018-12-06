import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['isActive:nav-bubble-active:nav-bubble'],
  isActive: false,
  cirNumber: 1,
  activePage: 1,

  didRender() {
//   this._super(...arguments);  // necessary if overriding init()
    this.set('isActive', this.cirNumber === this.activePage)
  },
   
  didUpdateAttrs(){
    this.set('isActive', this.cirNumber === this.activePage)
  }
});
