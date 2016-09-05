'use strict';
function Events(options) {
	var opts = options || {};
	this.events = opts;
}
Events.prototype.dispatch = function (eventsHandle) {
	var events = this.events;
	//var eventSplitter = /^(\w+)\s*(.*)$/;
	for(var key in events) {
		var method = events[key];
		//var match = key.match(eventSplitter);
		var el = key.split('@')[0],eventName = key.split('@')[1];
		//console.log(eventsHandle);
		$(el).on(eventName,eventsHandle[method]);
	}
}
module.exports=Events;
