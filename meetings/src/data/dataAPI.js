import dataInterface from './data';
const getCurrentFormattedDate = () => {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	return yyyy + '-' + mm + '-' + dd;
};

let newMeetingObj = {};
let data = {
	meetings: [],
	buildings: [],
	rooms: [],
	roomsTempData: [],
	buildingsTempData: []
};
export default {
	createTempDataMap: () => {
		data.roomsTempData = [];
		data.buildingsTempData = [];
		data.meetings.forEach((meeting) => {
			if (!data.roomsTempData[meeting.meetingRoomId]) {
				data.roomsTempData[meeting.meetingRoomId] = { meetings: [] };
			}
			data.roomsTempData[meeting.meetingRoomId].meetings.push(meeting);
		});
		data.rooms.forEach((room) => {
			if (!data.buildingsTempData[room.buildingId]) {
				data.buildingsTempData[room.buildingId] = { rooms: [] };
			}
			data.buildingsTempData[room.buildingId].rooms.push(room);
		});
	},
	setData: (obj) => {
		data.meetings = obj.meetings;
		data.rooms = obj.rooms;
		data.buildings = obj.buildings;
	},
	addAMeeting: (obj) => {
		return new Promise((resolve, reject) => {
			dataInterface.addAMeeting(obj).then(() => {
				data.meetings.push(obj);
				if (!data.roomsTempData[obj.meetingRoomId]) {
					data.roomsTempData[obj.meetingRoomId] = { meetings: [] };
				}
				data.roomsTempData[obj.meetingRoomId].meetings.push(obj);
				resolve({ status: 'success' });
			});
		});
	},
	findAvailableRooms: () => {
		let obj = newMeetingObj;
		let emptyRooms = [];
		data.buildingsTempData[obj.buildingId].rooms.forEach((room) => {
			let isRoomFree = true;
			if (data.roomsTempData[room.id]) {
				data.roomsTempData[room.id].meetings.forEach((meeting) => {
					if (meeting.date == obj.date) {
						if (obj.endTime < meeting.startTime || obj.startTime > meeting.endTime) {
						} else {
							isRoomFree = false;
						}
					}
				});
			}
			isRoomFree && emptyRooms.push(room);
		});
		return emptyRooms;
	},
	getDetailPageInfo: () => {
		let obj = {
			currentMeetings: 0,
			totalMeetingsToday: 0,
			totalRooms: data.rooms.length,
			totalBuildings: data.buildings.length
		};
		let currentFormattedDate = getCurrentFormattedDate();
		let currentTime = new Date();
		data.meetings.forEach((meeting) => {
			let startTime = new Date(meeting.date + ' ' + meeting.startTime);
			let endTime = new Date(meeting.date + ' ' + meeting.endTime);
			if (startTime < currentTime && currentTime < endTime) {
				obj.currentMeetings += 1;
			}
			if (meeting.date == currentFormattedDate) {
				obj.totalMeetingsToday += 1;
			}
		});
		return obj;
	},
	setNewMeetingObj: (obj) => {
		newMeetingObj = obj;
	},
	getNewMeetingObj: (obj) => {
		return newMeetingObj;
	},
	getBuildings: () => {
		return data.buildings;
	}
};
