import React from 'react';
import { ListItemText, List, ListItem } from '@material-ui/core';
const RoomDetails = (props) => {
	return (
		<ListItem divider="true">
			<ListItemText primary="Rooms" secondary={'Total ' + props.totalRooms} />
			<div style={{ color: 'green' }}>{'Free Now ' + props.freeRooms}</div>
		</ListItem>
	);
};

export default RoomDetails;
