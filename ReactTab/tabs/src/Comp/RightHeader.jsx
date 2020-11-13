import React from 'react';

const RightHeader = (props) => {
	return (
		<div className="btnContainer">
			<button
				onClick={() => {
					props.pickRandomCard();
				}}
			>
				Pick A Card
			</button>
			<button
				onClick={() => {
					props.resetGame();
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default React.memo(RightHeader);
