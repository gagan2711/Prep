import React from 'react';
import Card from './Card';
const CarasoulCards = (props) => {
	// state index and size
	// function // spitting our only 100 cards a time

	return (
		<div className="caraCards">
			<div he />
			{props.cards.map((card, index) => {
				return <Card key={index} styleClass="caraCard" card={card} />;
			})}
			<div he />
		</div>
	);
};

export default CarasoulCards;
