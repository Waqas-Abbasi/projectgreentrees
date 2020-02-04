import { EventActionTypes } from "./types/EventActionTypes";
import { Event } from "../state/EventState";

export const REGISTER_EVENT = 'REGISTER_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export const registerEvent = (event: Event): EventActionTypes => {
    return {
        type: REGISTER_EVENT,
        payload: event,
    };
};

