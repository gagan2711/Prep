import React from 'react';
import { ListItemText, ListItem } from '@material-ui/core';

const MeetingDetails = (props) => {
	return (
		<ListItem divider="true">
			<ListItemText primary="Meetings" secondary={'Total ' + props.totalMeetingsToday + ' Today'} />
			<div>{'Going on ' + props.currentMeetings}</div>
		</ListItem>
	);
};

export default MeetingDetails;
