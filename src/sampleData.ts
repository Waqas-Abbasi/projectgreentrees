import {Organisation} from './redux/state/OrganisationState';
import {Event} from './redux/state/EventState';

export const organisations: Organisation[] = [
	{
		name: 'Green Life USA',
		email: 'greenlifeusa@gmail.com',
		contact: '+44 345 553 334',
		location: 'Green Monument Washington DC, United States Of America',
	},
	{
		name: 'World Wide Fund',
		email: 'wwf@wwforg.com',
		contact: '+84 355 452 684',
		location: 'Washington Street 24431 SA, London, United Kingdom',
	},
	{
		name: 'Green Hedge Fund',
		email: 'greenhedge@fundorg.com',
		contact: '+66 341 254 284',
		location: 'George Building 3325WL ,Wall Street, New York',
	},
];

export const events: Event[] = [
	{
	    name: 'Planting Trees for Washington DC',
        location: 'Monument Street, Washington DC, USA',
        organisation: organisations[0],
        time: new Date(new Date().setDate(new Date().getDate() + 4)),
        participants: [],
    },
    {
        name: 'Forest Reforestation Event',
        location: 'Central Forest, Washington DC, USA',
        organisation: organisations[0],
        time: new Date(new Date().setDate(new Date().getDate() + 12)),
        participants: [],
    },
    {
        name: 'Trees For DC',
        location: 'Washington DC, USA',
        organisation: organisations[0],
        time: new Date(new Date().setDate(new Date().getDate() + 20)),
        participants: [],
    },
    {
        name: '50 Million Trees for Karachi',
        location: 'Karachi, Pakistan',
        organisation: organisations[1],
        time: new Date(new Date().setDate(new Date().getDate() + 5)),
        participants: [],
    },
    {
        name: '50 Million Trees for New Delhi',
        location: 'New Delhi, India',
        organisation: organisations[1],
        time: new Date(new Date().setDate(new Date().getDate() + 10)),
        participants: [],
    },
    {
        name: '50 Million Trees for Dhaka',
        location: 'Dhaka, Bangladesh',
        organisation: organisations[1],
        time: new Date(new Date().setDate(new Date().getDate() + 15)),
        participants: [],
    },
    {
        name: 'Central Park to Central Forest',
        location: 'New York, USA',
        organisation: organisations[2],
        time: new Date(new Date().setDate(new Date().getDate() + 30)),
        participants: [],
    },
    {
        name: 'New Jersey Green Treeat',
        location: 'New Jersey, USA',
        organisation: organisations[2],
        time: new Date(new Date().setDate(new Date().getDate() + 50)),
        participants: [],
    },
    {
        name: 'New York 10 Million Trees',
        location: 'New York, USA',
        organisation: organisations[2],
        time: new Date(new Date().setDate(new Date().getDate() + 100)),
        participants: [],
    },
];
