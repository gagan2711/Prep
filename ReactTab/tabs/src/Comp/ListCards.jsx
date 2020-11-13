import React from 'react';
import Card from './Card';
const ListCards = (props) => {
	return (
		<div>
			<p className="title"> List of Cards</p>
			{props.cards.map((card, index) => {
				return <Card key={index} card={card} />;
			})}
		</div>
	);
};

export default ListCards;
