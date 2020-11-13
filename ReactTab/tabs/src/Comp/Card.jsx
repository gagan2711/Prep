import React from 'react';
const Card = (props) => {
	return (
		<div className={'card ' + props.card.suit}>
			<div>{props.card.value}</div>
		</div>
	);
};

export default Card;
