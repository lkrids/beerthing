var App = App || {};

(function($){
	'use strict';
	_.extend(App, {
		'initialize': function () {
			// Create a global config model for app settings
			App.config = new Backbone.Model( $.parseJSON( $.trim( $('#app-settings').text() ) ) ); // store settings for "widgets"

			new App.Views.AppView({
				'el': 'body'
			});
			Backbone.history.start(); // kick off routes
		}
	}, Backbone.Events); //interact with custom events

	App.initialize();
}(jQuery));

