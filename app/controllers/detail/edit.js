import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        save: function() {
            this.model.save();
            this.transitionToRoute('detail', this.model.id);
        },
        cancel: function() {
            this.model.rollback();
            this.transitionToRoute('detail', this.model.id);
        }
    }
});
