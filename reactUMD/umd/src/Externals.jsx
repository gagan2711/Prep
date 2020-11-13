import Container2 from './Container2';
import React from 'react';
const Externals = {
	url: '',
	Container: '',
	Container2: 'czxcc',
	init: function() {
		alert(this.Container2);
	}
};
export const loadExternals = {
	init: function() {
		alert(Externals.Container2);
	}
};
function ss() {
	let item = document.createElement('script');
	// item.setAttribute('crossorigin', true);
	// item.crossorigin = 'anonymous';
	item.src = 'http://localhost/micro-app/bundle2.js';
	item.onload = function(rr) {
		Externals.Container = window.container.default;
	};
	document.getElementsByTagName('body')[0].appendChild(item);
}
ss();

export default Externals;
