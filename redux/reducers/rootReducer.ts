import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	user: userReducer,
	events: eventReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
