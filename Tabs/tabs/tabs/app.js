window.addEventListener('DOMContentLoaded', () => {
	function rendere(id) {
		const item = document.createElement('p');

		item.innerHTML = 'asdfsdfsd asfdsdf asdfdsf';

		return item;
	}
	initTabApp().init([ { label: 'home', id: 'home' } ], rendere);
});
function initTabApp() {
	let root = document.getElementById('root');
	function init(tabs, rendere) {
		let temp = document.getElementById('tabsTemplate').content.cloneNode(true);
		let header = temp.querySelector('ul');
		let container = temp.querySelector('.continer');
		tabs.forEach((element) => {
			header.innerHTML += `<li id=` + element.id + ` class="tabItem">` + element.label + `</li>`;
		});
		header.addEventListener('click', function(ev) {
			container.appendChild(rendere(ev.target.id));
		});
		root.appendChild(temp);
	}
	return {
		init: function(tabs, rendere) {
			init(tabs, rendere);
		},
		addNewTab: function() {},
		getContainer: function() {}
	};
}
