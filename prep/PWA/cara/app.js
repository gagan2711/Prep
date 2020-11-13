// if (!('serviceWorker' in navigator)) {
// 	console.log('not supported');
// 	return;
// }
// navigator.serviceWorker
// 	.register('./sw.js', {
// 		scope: '/'
// 	})
// 	.then(function(scope) {
// 		console.log('service worker is registed scope is ' + scope.scope);
// 	})
// 	.catch(function(err) {
// 		console.log(err.message);
// 	});
/// policy handling html on view
var items = Array.from(document.querySelectorAll('[data-toolTip="true"]'));
var body = document.getElementsByTagName('body')[0];
let toolTip = document.createElement('div');
body.appendChild(toolTip);
toolTip.style.position = 'absolute';
toolTip.style.visibility = 'hidden';
let toolTipTimeout;
toolTip.addEventListener('mouseover', function() {
	if (toolTipTimeout) {
		clearTimeout(toolTipTimeout);
	}
});
toolTip.addEventListener('mouseleave', function() {
	hideToolTip();
});
items.forEach(function(item) {
	item.addEventListener('mouseover', registerToolTip);
	item.addEventListener('mouseleave', removeToolTip);
});
function hideToolTip() {
	toolTip.style.visibility = 'hidden';
}
function removeToolTip() {
	toolTipTimeout = setTimeout(function() {
		hideToolTip();
	}, 3000);
}
function registerToolTip(ev) {
	var boundryRect = ev.target.getBoundingClientRect();
	showToolTip({ ...boundryRect });
}
function showToolTip(pos) {
	toolTip.style.left = pos.left;
	toolTip.style.top = pos.top;
	toolTip.innerHTML = '<div style="height:300px;border:1px solid black;">Hey i am a toolTip</div>';
	toolTip.style.visibility = 'visible';
}

class PopUpInfo extends HTMLBaseElement {
	constructor() {
		super();

		// Create a shadow root
		var shadow = this.attachShadow({ mode: 'open' });

		// Create spans
		var wrapper = document.createElement('span');
		wrapper.setAttribute('class', 'wrapper');
		var icon = document.createElement('span');
		icon.setAttribute('class', 'icon');
		icon.setAttribute('tabindex', 0);
		var info = document.createElement('span');
		info.setAttribute('class', 'info');

		// Take attribute content and put it inside the info span
		var text = this.getAttribute('data-text');
		info.textContent = text;

		// Insert icon
		var imgUrl;
		if (this.hasAttribute('img')) {
			imgUrl = this.getAttribute('img');
		} else {
			imgUrl = 'img/default.png';
		}
		var img = document.createElement('img');
		img.src = imgUrl;
		icon.appendChild(img);

		// Create some CSS to apply to the shadow dom
		var style = document.createElement('style');

		style.textContent = `
		.wrapper { 
			position: relative;
		}
		.info {
		  font-size: 0.8rem;
		  width: 200px;
		  display: inline-block;
		  border: 1px solid black;
		  padding: 10px;
		  background: white;
		  border-radius: 10px;
		  opacity: 0;
		  transition: 0.6s all;
		  position: absolute;
		  bottom: 20px;
		  left: 10px;
		  z-index: 3;
		}
		img {
		  width: 1.2rem;
		}
		.icon:hover + .info, .icon:focus + .info {
		  opacity: 1;
		}`;

		// attach the created elements to the shadow dom

		shadow.appendChild(style);
		shadow.appendChild(wrapper);
		wrapper.appendChild(icon);
		wrapper.appendChild(info);
	}
}
let items1 = [
	'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
	'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
	'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'
];
const container = document.getElementById('container');
let counter = 1;
let maxLength = items1.length;
let width = 300;
let template = document.getElementById('cara-content');
items1.forEach(function(item, index) {
	// let img = document.createElement('img');
	// img.src = item;
	// let content = document.createElement('div');
	// content.classList.add('content');
	// content.appendChild(img);
	// content.style.left = index++ * width + 'px';
	// container.appendChild(content);

	let templateContent = template.content.cloneNode(true);
	templateContent.querySelector('img').src = item;
	templateContent.querySelector('.content').style.left = index++ * width + 'px';
	container.appendChild(templateContent);
});
document.getElementById('left').addEventListener('click', function() {
	if (counter < maxLength) {
		let value = width * counter;
		container.style.transform = 'translateX(-' + value + 'px)';
		counter++;
	}
});
