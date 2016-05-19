import Base from 'simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
    authorize: function(jqXHR, requestOptions) {
        var token = this.get('session.store.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(token)) {
            console.log(token);
            jqXHR.setRequestHeader('Authorization', 'Token ' + token);
        }
    }
});
