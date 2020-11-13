import React from 'react';

const SelectBox = (props) => {
	return (
		<div className="formControlContainer">
			<div className="label">{props.label}</div>
			<select
				required
				className="selectBox"
				defaultValue={props.values[0].id}
				onChange={(ev) => {
					props.onChange(ev.target.value);
				}}
			>
				{props.values.map((value) => {
					return <option value={value.id}>{value.name}</option>;
				})}
			</select>
		</div>
	);
};

export default SelectBox;
