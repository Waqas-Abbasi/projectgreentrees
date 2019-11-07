import {EventActionTypes} from './types/EventActionTypes';

export const REGISTER_EVENT = 'REGISTER_EVENT';

export const registerEvent = (event: Event): EventActionTypes => {
	return {
		type: REGISTER_EVENT,
		payload: event,
	}
};

export interface UserDispatchProps {
	registerUser: (event: Event) => EventActionTypes
}
