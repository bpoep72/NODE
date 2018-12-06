import DS from 'ember-data';

export default DS.Model.extend({
  bankName: DS.attr('string'),
	accountNumber: DS.attr('string'),
  routingNumber: DS.attr('string'),
});
