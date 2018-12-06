import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    continue() {

      // needs to load next template, not transition yet
   //   this.replaceRoute('onboarding.lifestyle.survey1'); // or do we need extra
  //    this.get('target.target.router').refresh();

      /* PLAN (I think)

      1. replaceRoute like above (or maybe can replaceWith and pass in model of this route?)
      2. Override renderTemplate in survey1 Route file
      3. set controller as this one (lifestyle)
      4. set outlet as 'surveyOutlet'
      5. render 'survey1' template there

      Second thought:

      Maybe we should just try rendering templates we need into outlets, and just activating outlets when needed?

      */

      this.transitionToRoute('onboarding.lifestyle.survey1');

      // can I call the willRender hook by a click, or trigger some other way?
      // would need to pass params in?

      // can I call an action in route with a component instead of in controller?

    }
  }
});
