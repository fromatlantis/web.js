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
		//$(el).off(eventName).on(eventName,eventsHandle[method]);
		if(!!eventsHandle[method]){
			if($(el).length>0){
				$(el).off(eventName).on(eventName,eventsHandle[method]);
			}else{
				$(document).off(eventName,el).on(eventName,el,eventsHandle[method]);
			}
		}else{
			//console.log(method);
		}
	}
}
module.exports=Events;
