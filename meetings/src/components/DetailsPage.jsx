import React, { useEffect, useState } from 'react';
import { ListItemText, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import dataAPI from '../data/dataAPI';
import data from '../data/data';
import BuildingsDetails from './Details/BuildingsDetails';
import RoomDetails from './Details/RoomDetails';
import MeetingDetails from './Details/MeetingDetails';

let isPageLoaded = false;
const DetailsPage = () => {
	const [ state, setState ] = useState({
		isDataLoaded: false
	});
	useEffect(() => {
		if (!isPageLoaded) {
			Promise.all([ data.getBuildings(), data.getMeetingRooms(), data.getMeetings() ]).then((results) => {
				dataAPI.setData({ buildings: results[0], rooms: results[1], meetings: results[2] });
				dataAPI.createTempDataMap();
				isPageLoaded = true;
				setState({ isDataLoaded: true });
			});
		} else {
			setState({ isDataLoaded: true });
		}
	}, []);

	if (!state.isDataLoaded) return <div className="loading"> Loading content ....</div>;
	const obj = dataAPI.getDetailPageInfo();
	return (
		<div className="container">
			<List>
				<BuildingsDetails totalBuildings={obj.totalBuildings} />
				<RoomDetails totalRooms={obj.totalRooms} freeRooms={obj.totalRooms - obj.currentMeetings} />
				<MeetingDetails totalMeetingsToday={obj.totalMeetingsToday} currentMeetings={obj.currentMeetings} />
			</List>
			<div className="bar">
				<Link className="btnLeft" to="/createMeeting">
					Add a meeting
				</Link>
			</div>
		</div>
	);
};

export default DetailsPage;
