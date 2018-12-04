import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['isHidden:progress-indicator-hidden:progress-indicator'],
  isHidden: false,
  activePage: 1,

  didRender() {
//   this._super(...arguments);  // necessary if overriding init()
    this.set('isHidden', this.activePage === 0)
  },
       
  didUpdateAttrs(){
    this.set('isHidden', this.activePage === 0)
  }
});
