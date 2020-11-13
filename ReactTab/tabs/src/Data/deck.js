export default {
	deck: function() {
		const deck = [];
		const suits = [ { suit: 'hearts' }, { suit: 'spades' }, { suit: 'clubs' }, { suit: 'diamonds' } ];
		const values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
		suits.forEach((suit) => {
			values.forEach((value) => {
				deck.push({
					...suit,
					value: value
				});
			});
		});
		return {
			getDec: () => {
				return deck;
			}
		};
	}
};
