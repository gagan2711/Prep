import React from 'react';

const TimePicker = (props) => {
	return (
		<div className="formControlContainer">
			<div className="label">{props.label} </div>
			<input
				type="time"
				required
				onChange={(ev) => {
					props.onChange(ev.target.value);
				}}
			/>
		</div>
	);
};

export default TimePicker;
