let widget = {
	html: `<div>${name}</div>
           <span></span>`,
	render: function() {
		return document.createElement('div').innerHTML(this.html);
	},
	updateTemplate: function(html) {
		this.html = html;
	}
};
let container = {
	layoutConfig: { w1: { row: 1, col: 1 } },
	getConfig: function() {},
	updateConfig: function() {}
};
let observer = {
	events: {
		drag: [ w1 ],
		dropped: [ w2 ]
	},
	subscribe: function() {},
	dispatch: function() {}
};
