import React from 'react';
import { ListItemText, ListItem } from '@material-ui/core';

const BuildingsDetails = (props) => {
	return (
		<ListItem divider="true">
			<ListItemText primary="Buildings" secondary={'Total ' + props.totalBuildings} />
		</ListItem>
	);
};

export default BuildingsDetails;
