var App = App || {};

App.Views = App.Views || {};

(function($) {
	'use strict';

	App.Views.AppView = Backbone.View.extend({

		'events': {},

		'initialize': function() {

			var view = this;

			view.exampleView = new App.Views.ExampleView({
				'el': 'body'
			});

			console.log('view:init', 'AppView');
		}
	});
}(jQuery));