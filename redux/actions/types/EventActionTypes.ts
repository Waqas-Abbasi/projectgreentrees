import { Event } from '../../state/EventState';
import { DELETE_EVENT, REGISTER_EVENT } from '../eventActions';

interface RegisterEvent {
	type: typeof REGISTER_EVENT;
	payload: Event;
}

interface DeleteEvent {
	type: typeof DELETE_EVENT;
	payload: Event;
}

export type EventActionTypes = RegisterEvent | DeleteEvent;
