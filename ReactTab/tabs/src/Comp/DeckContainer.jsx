import React from 'react';
import CarasoulCards from './CarasoulCards';
import deck from '../Data/deck';
import ListCards from './ListCards';
import { useState } from 'react';
import RightHeader from './RightHeader';
import { useCallback } from 'react';
const DeckContainer = () => {
	const [ state, setState ] = useState({
		listCards: deck.deck().getDec(),
		pickedCards: []
	});
	const pickRandomCard = () => {
		if (state.listCards.length > 0) {
			const randomNumber = Math.floor(Math.random() * state.listCards.length);

			const pickedCard = state.listCards.splice(randomNumber, 1);

			state.pickedCards.push(pickedCard[0]);
			setState({
				listCards: state.listCards,
				pickedCards: state.pickedCards
			});
		} else {
			alert('There are no cards to pick');
		}
	};
	const resetGame = useCallback(() => {
		if (state.pickedCards.length > 0) {
			setState({
				listCards: deck.deck().getDec(),
				pickedCards: []
			});
		} else {
			alert('Please select cards first');
		}
	});
	return (
		<div className="container">
			<div className="leftPane">
				<ListCards cards={state.listCards} />
			</div>
			<div className="rightPane">
				<RightHeader resetGame={resetGame} pickRandomCard={pickRandomCard} />
				<CarasoulCards cards={state.pickedCards} />
			</div>
		</div>
	);
};

export default DeckContainer;
