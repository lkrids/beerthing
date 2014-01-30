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
			var number;

			window.getColor = this.getColor;
			window.Beers = this.BEERS;
			console.log('view:init', 'AppView');
		},

		BEERS: function(brrs) {
			
			$.each(brrs, function(key, value) {
				console.log(brrs[key].beer.beer_name);
				if(key < 5){
					$('#recos').append('<li>' +brrs[key].beer.beer_name + '</li>');	
				}
				
			});
		},
		getColor: function(number) {
			var view = this;
			var beer;
			if (number < 4) {
				beer = 'stout';
			} else if (number >= 4 && number <= 7) {
				beer = 'lager';
			} else if (number >= 4 && number <= 7) {
				beer = 'red';
			} else if (number > 7 && number <= 10) {
				beer = 'amber';
			} else if (number >= 10) {
				beer = 'pale';
			}else {
				beer = 'pale';
			}

			view.untappedCollection = new App.Collections.Untapped();

			view.untappedCollection.fetch({
				data: {
					q: beer
				},
				success: function(data) {
					var brrs = data._byId.c4.attributes.response.beers.items;

					
					window.Beers(brrs);
				}
			});
		}



	});
}(jQuery));