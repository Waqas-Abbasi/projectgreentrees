import {Organisation} from './OrganisationState';

export interface Event {
	name: string;
	location: string;
	organisation: Organisation;
	Time: Date;
	participants: [];
}

export interface EventState {
	events: Event[]
}


