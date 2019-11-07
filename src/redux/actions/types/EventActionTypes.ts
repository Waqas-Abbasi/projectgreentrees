import {REGISTER_EVENT} from '../eventActions';
import {Event} from '../../state/EventState';

interface RegisterEvent {
	type: typeof REGISTER_EVENT,
	payload: Event,
}

export type EventActionTypes = RegisterEvent;
