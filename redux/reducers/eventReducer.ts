import { REGISTER_EVENT } from '../actions/eventActions';
import { EventActionTypes } from '../actions/types/EventActionTypes';
import { EventState } from '../state/EventState';
import { Organisation } from '../state/OrganisationState';

const organisation: Organisation = {
	name: 'WWF',
	email: 'wwf@gmail.com',
	contact: '+31 54333212',
	location: '2559 AS London, United Kingdom'
};

const initialState: EventState = {
	events: [
		{
			name: 'Trees For Change',
			location: 'London, United Kingdom',
			time: new Date(),
			participants: [],
			organisation: organisation
		}
	]
};

const eventReducer = (
	state = initialState,
	action: EventActionTypes
): EventState => {
	switch (action.type) {
		case REGISTER_EVENT:
			return { ...state };
		default:
			return { ...state };
	}
};


export default eventReducer;
