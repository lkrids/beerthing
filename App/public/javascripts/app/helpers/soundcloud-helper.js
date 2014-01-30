var App = App || {};

App.Helpers = App.Helpers || {};

(function($) {

	'use strict';

	App.Helpers.SoundCloud = {

		'find': function(intensity){
			
			intensity = Math.floor(intensity);

			var music = {
				'0': 'https://soundcloud.com/macklemore/macklemore-x-ryan-lewis-thrift',
				'1': 'https://soundcloud.com/downpouracdc/have-a-drink-on-me-by-downpour',
				'2': 'https://soundcloud.com/adukov/drunken-lullabies-all-flogging',
				'3': 'https://soundcloud.com/rodrigo-de-la-pe-a-1/thin-lizzy-whiskey-in-the-jar',
				'4': 'https://soundcloud.com/lion-iron-zion/the-doors-alabama-song-whiskey',
				'5': 'https://soundcloud.com/johnfossey/sweet-home-alabama-lynyrd-skynyrd-performed-live-by-johnny-the-globetrekkers',
				'6': 'https://soundcloud.com/craziemagoo/guns-n-roses-paradise-city',
				'7': 'https://soundcloud.com/aaronalton/walk-this-way-aerosmith',
				'8': 'https://soundcloud.com/back-to-seventies/rock-roll-led-zeppelin',
				'9': 'https://soundcloud.com/agasrocker/good-times-bad-times-led-zeppelin-cover-agasrocker-on-vocals',
				'10': 'https://soundcloud.com/strange-brewer/i-drink-alone-george-thorogood',
				'11': 'https://soundcloud.com/imacrea/pink-floyd-comfortably-numb',
				'12': 'https://soundcloud.com/jimmy-ellis-3/roadhouse-blues-doors-alive',
				'13': 'https://soundcloud.com/charyl/guns-n-roses-sweet-child-of-mine',
				'14': 'https://soundcloud.com/docvet/rainy-day-women-bob-dylan'

			};

			return music[intensity];

		}

	};

}(jQuery));
