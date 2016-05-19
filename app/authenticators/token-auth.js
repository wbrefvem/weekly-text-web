import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';
import ENV from 'weekly-text-web/config/environment';

export default Base.extend({
	restore: function(url) {
		//console.log(localStorage.getItem('token'));
		return Ember.$.ajax({
			url: url, //ENV.API_SERVER_HOSTNAME + ENV.API_NAMESPACE,
			method: 'GET',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', 'Token ' + localStorage.getItem('token'));
			}
		});
	},
	authenticate: function(options) {
		console.log('token-auth.authenticate invoked with the following options: ' + options.token);
		return Ember.$.post(ENV.API_SERVER_TOKEN_URL, options, function(data, status, jqXHR) {
			localStorage.setItem('token', data['token']);
		});
	},
	invalidate: function(data) {

	}
});
