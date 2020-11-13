import React from 'react';
import formatter from '../../util/formatter';
const DatePicker = (props) => {
	let today = formatter.formatDate(new Date());
	return (
		<div className="formControlContainer">
			<div className="label">Select Date :- </div>
			<input
				defaultValue={today}
				min={today}
				type="date"
				required
				onChange={(ev) => {
					props.onChange(ev.target.value);
				}}
			/>
		</div>
	);
};

export default DatePicker;
