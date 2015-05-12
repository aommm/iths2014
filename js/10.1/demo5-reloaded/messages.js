var app = angular.module('messagesModule', []);

app.factory('messages', function() {
	var messages = {};
	messages.list = [];
	messages.add  = function(msg) {
		console.log("adding ",msg);
		this.list.push({message: msg});
		console.log("current contents:", this.list);
	};
	return messages;
});
