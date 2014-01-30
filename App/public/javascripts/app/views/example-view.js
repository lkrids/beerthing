var App = App || {};

App.Views = App.Views || {};

(function($) {
	'use strict';

	App.Views.ExampleView = Backbone.View.extend({

		'events': {	},

		'initialize': function() {

			SC.initialize({
				client_id: '4f537976a8bc35f6f369aa1b191c2f14'
			});

			var opts = {
				auto_play: true,
				iframe: true
			};

			var intensity = 5;
			var track = App.Helpers.SoundCloud.find(intensity);

			SC.oEmbed(track, opts, function(oEmbed) {
				$('#music').html(oEmbed.html);
			});
			
		}

	});
}(jQuery));