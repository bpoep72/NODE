import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    this.controllerFor('onboarding').set('activePage', 1);
  },
});
