import DS from 'ember-data';


export default DS.Model.extend({
    number: DS.attr('string'),
    short_name: DS.attr('string'),
    first_name: DS.attr('string'),
    last_name: DS.attr('string')
});
