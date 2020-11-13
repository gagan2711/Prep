let cara = document.querySelector('.ul-cara');

let items = Array.from(cara.children);
let caraWidth = cara.getBoundingClientRect().width;
const moveItemToLeft = (item, index) => {
	item.style.left = index * caraWidth + 'px';
};
items.forEach(moveItemToLeft);

document.querySelector('.btn--left').addEventListener('click', (e) => {
	cara.style.transform = 'translateX(-' + caraWidth + 'px)';
});
