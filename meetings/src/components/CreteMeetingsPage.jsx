import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import dataAPI from '../data/dataAPI';
import DatePicker from './Create/DatePicker';
import TimePicker from './Create/TimePicker';
import SelectBox from './Create/SelectBox';
import formatter from '../util/formatter';
const CreateMeetingsPage = () => {
	const history = useHistory();
	let buildings = dataAPI.getBuildings();
	const state = {
		date: formatter.formatDate(new Date()),
		startTime: '',
		endTime: '',
		buildingId: buildings && buildings[0].id
	};
	const selectDate = useCallback((date) => {
		state.date = date;
	}, []);
	const selectStartTime = useCallback((time) => {
		state.startTime = time;
	}, []);
	const selectEndTime = useCallback((time) => {
		state.endTime = time;
	}, []);
	const selectBuilding = useCallback((buildingId) => {
		state.buildingId = buildingId;
	}, []);
	const clickSelectRoom = () => {
		if (!state.startTime || !state.endTime) {
			alert('please select all required values.');
			return;
		}
		if (state.endTime < state.startTime) {
			alert('please select end time after start Time.');
			return;
		}
		dataAPI.setNewMeetingObj(state);
		history.push('/selectRoom');
	};
	return (
		<div className="meetingsPage">
			<form noValidate>
				<DatePicker onChange={selectDate} />
				<TimePicker label="Select Start Time :- " onChange={selectStartTime} />
				<TimePicker label="Select End Time :- " onChange={selectEndTime} />
				<SelectBox label="Select End Time :- " values={buildings} onChange={selectBuilding} />
			</form>
			<div className="bar">
				<button
					className="btnLeft"
					onClick={() => {
						clickSelectRoom();
					}}
				>
					Select Room
				</button>
				<Link className="btnLeft" to="/">
					Cancel
				</Link>
			</div>
		</div>
	);
};

export default CreateMeetingsPage;
