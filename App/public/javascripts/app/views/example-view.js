var App = App || {};

App.Views = App.Views || {};

(function($) {
	'use strict';

	App.Views.ExampleView = Backbone.View.extend({

		'events': {},

		'initialize': function() {

			var view = this;
			$("#canvas").on("click", function(event){
				var rawData = $(this)[0].getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
				console.log(rawData);
				console.log(event.offsetX, event.offsetY);
				var hex = rgbToHex(rawData[0], rawData[1], rawData[2], rawData[3]);
				console.log("hex: "+hex);
				var intensity = Math.sqrt( 0.241*rawData[0]^2 + 0.691*rawData[1]^2 + 0.068*rawData[2]^2 );

				var track = App.Helpers.SoundCloud.find(intensity);

				view.embed(track);
				window.getColor(intensity);
			});

			SC.initialize({
				client_id: '4f537976a8bc35f6f369aa1b191c2f14'
			});
			
		},


		'embed': function(track){

			var opts = {
				auto_play: true,
				iframe: true
			};
			
			SC.oEmbed(track, opts, function(oEmbed) {
				$('#music').html(oEmbed.html);
				
			});
		}

	});
}(jQuery));