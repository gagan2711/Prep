import React from 'react';
import { ListItemText, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import dataAPI from '../data/dataAPI';
import { useHistory } from 'react-router-dom';
const SelectRoom = () => {
	const history = useHistory();
	const getEmptyRooms = dataAPI.findAvailableRooms();
	const selectRoom = (room) => {
		dataAPI.addAMeeting({ ...dataAPI.getNewMeetingObj(), meetingRoomId: room.id }).then(() => {
			history.push('/');
		});
	};
	if (getEmptyRooms.length == 0) {
		return (
			<div>
				<p> There is no empty room right now . Please select another building or time. </p>
				<div className="bar">
					<Link className="btnLeft" to="/createMeeting">
						Cancel
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div className="container">
			<List>
				{getEmptyRooms.map((room) => {
					return (
						<ListItem
							className="listItem"
							divider="true"
							onClick={() => {
								selectRoom(room);
							}}
						>
							<ListItemText primary={room.name} secondary={'On Flore ' + room.flore + ''} />
							<div>{'Building ' + room.flore}</div>
						</ListItem>
					);
				})}
			</List>
			<div className="bar">
				<Link className="btnLeft" to="/createMeeting">
					Cancel
				</Link>
			</div>
		</div>
	);
};

export default SelectRoom;
