const addNewList = (top, left, objs) => {
	let listItem = document.createElement('ul');
	listItem.classList.add('menu-ul');
	listItem.style.top = top + 'px';
	listItem.style.left = left + 'px';
	objs.forEach((element) => {
		listItem.appendChild(createListItem(element));
	});
	listItem.addEventListener('click', (e) => {
		let elmn = e.target;
		let top = elmn.getBoundingClientRect().top;
		let left = elmn.getBoundingClientRect().top;
		addNewList();
	});
	return listItem;
};
const createListItem = (element) => {
	let item = document.createElement('li');
	item.classList.add('menu-li');
	item.innerHTML = element.text;
	return item;
};
document.querySelector('.menu-ul').addEventListener('click', (e) => {
	let top = e.target.getBoundingClientRect().top;
	let left = e.target.getBoundingClientRect().left + 200;
	e.target.appendChild(addNewList(top, left, [ { text: 'sdfdsaf' }, { text: 'asfdsaf' } ]));
});
document.querySelector('.std').addEventListener('onmouseout', () => {
	debugger;
});
Object.prototype.create = function(o) {
	var F = function() {};
	F.prototype = o;
	return new F();
};
