import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        authenticate: function() {
            var data = this.getProperties('username', 'password');
            return this.get('session').authenticate('authenticator:token-auth', data);
        }      
    }

});
