function createComments(id) {
	const $ul = document.createElement('ul');
	$ul.setAttribute('id', id);
	$ul.classList.add('comment');
	return $ul;
}
function createComentContainer(obj) {
	// const $commentsContaier = document.getElementById('commentsContainer').cloneNode(true);
	const $li = document.createElement('li');
	const template =
		`<div class="commentsContainer">
    <div class="commentsHeader">
        <button class="btn" data-commentsId="` +
		obj.id +
		`">Delete</button>
        <button class="btn" data-commentsId="` +
		obj.id +
		`">like</button>
    </div>
    <p class="commentText">` +
		obj.text +
		`</p>
</div>`;
	$li.innerHTML = template;
	return $li;
}
let comments = [
	{
		id: 'one',
		text: 'Some commnets about my code',
		children: [
			{
				id: 'two',
				text: 'its really good code',
				children: []
			}
		]
	}
];
const $main = document.getElementById('mainApp');
createCommnetsInLoop(comments, $main);
function createCommnetsInLoop(arr, $parent) {
	arr.forEach((item) => {
		const $comment = createComments(item.id);
		const $li = createComentContainer(item);
		$comment.appendChild($li);
		$parent.append($comment);
		createCommnetsInLoop(item.children, $li);
	});
}
document.querySelector('.mainApp').addEventListener('click', function(ev) {
	debugger;
});
