var App = App || {};

App.Helpers = App.Helpers || {};

(function($) {

	'use strict';

	App.Helpers.SoundCloud = {

		'find': function(intensity){
			
			intensity = Math.floor(intensity);

			var music = {
				'0': 'http://soundcloud.com/forss/flickermood',
				'1': 'http://soundcloud.com/forss/flickermood',
				'2': 'http://soundcloud.com/forss/flickermood',
				'3': 'http://soundcloud.com/forss/flickermood',
				'4': 'http://soundcloud.com/forss/flickermood',
				'5': 'http://soundcloud.com/forss/flickermood',
				'6': 'http://soundcloud.com/forss/flickermood',
				'7': 'http://soundcloud.com/forss/flickermood',
				'8': 'http://soundcloud.com/forss/flickermood',
				'9': 'http://soundcloud.com/forss/flickermood',
				'10': 'http://soundcloud.com/forss/flickermood',
				'11': 'http://soundcloud.com/forss/flickermood',
				'12': 'http://soundcloud.com/forss/flickermood',
				'13': 'http://soundcloud.com/forss/flickermood',
				'14': 'http://soundcloud.com/forss/flickermood'

			};

			return music[intensity];

		}

	};

}(jQuery));