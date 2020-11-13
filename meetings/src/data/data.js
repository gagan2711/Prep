let buildings = [
	{
		id: 1,
		name: 'Intuit Office A'
	},
	{
		id: 2,
		name: 'Intuit Office B'
	},
	{
		id: 3,
		name: 'Intuit Office C'
	}
];
let rooms = [
	{
		id: 1,
		buildingId: 1,
		flore: 1,
		name: 'Punjab'
	},
	{
		id: 2,
		buildingId: 1,
		flore: 1,
		name: 'Delhi'
	},
	{
		id: 3,
		buildingId: 2,
		flore: 1,
		name: 'Karnataka'
	},
	{
		id: 4,
		buildingId: 2,
		flore: 1,
		name: 'Tamilnadu'
	},
	{
		id: 5,
		buildingId: 3,
		flore: 1,
		name: 'Kolkata'
	},
	{
		id: 6,
		buildingId: 3,
		flore: 1,
		name: 'Gangtok'
	}
];

let meetings = [
	{
		id: 1,
		meetingRoomId: 1,
		date: '2020-11-12',
		startTime: '10:00',
		endTime: '10:30',
		title: 'Case Study'
	},
	{
		id: 2,
		meetingRoomId: 3,
		date: '2020-11-12',
		startTime: '10:00',
		endTime: '10:30',
		title: 'Case Study 2'
	}
];

export default {
	getBuildings: () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve([ ...buildings ]);
			}, 1000);
		});
	},
	getMeetingRooms: () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve([ ...rooms ]);
			}, 1000);
		});
	},
	getMeetings: () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve([ ...meetings ]);
			}, 1000);
		});
	},
	addAMeeting: (obj) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				meetings.push(obj);
				resolve({ status: 'Success' });
			}, 1000);
		});
	}
};
