var App = App || {};

App.Collections = App.Collections || {};

(function($) {
	'use strict';

	App.Collections.Untapped = Backbone.Collection.extend({

		url: 'http://api.untappd.com/v4/search/beer/info/1009?client_id=AAD8154E9F8F3ED0D631F60B10742F49C27DB1B0&client_secret=17D0D1C53EF9D13880896FBAE8518BEF79C3B8AB',

		'initialize': function() {

			console.log('view:init', 'Untapped');
		}
	});
}(jQuery));