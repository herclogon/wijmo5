(function () {
	'use strict';

	angular
		.module('app')
		.factory('GuidSvc', GuidSvc);

	function GuidSvc() {
		var svc = {
			getGuid: getGuid
		}

		return svc;

		// Helper function to get a GUID to serve as a (hopefully) unique ID for data objects.
		// NOTE:  It isn't vital that we have guaranteed unique identifiers in this case.
		//
		// NOTE:  It is NOT recommended that this be used in production applications!
		//
		function getGuid() {
		    // shameless copy of broofa's answer on SO: http://bit.ly/1xcf8xo
		    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		        return v.toString(16);
		    });

		    return guid;
		}
	}

})();