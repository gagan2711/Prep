import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import classNames from 'classnames';
import CreateMeetingsPage from './CreteMeetingsPage';
import SelectRoom from './SelectRoom';

const MeetingsApp = (props) => {
	const classes = classNames('meetingsApp', props.align ? props.align : '');
	return (
		<Router>
			<div className={classes}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6">Meetings App</Typography>
					</Toolbar>
				</AppBar>
				<div>
					<Switch>
						<Route path="/" exact component={DetailsPage} />
						<Route path="/createMeeting" component={CreateMeetingsPage} />
						<Route path="/selectRoom" component={SelectRoom} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};
export default MeetingsApp;
