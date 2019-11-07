import {UserActionTypes} from '../actions/types/UserActionTypes';
import {UserState} from '../state/UserState';

const initialState: UserState = {
	user: {
		name: '',
		email: '',
	}
};

const userReducer = (
	state = initialState,
	action: UserActionTypes
): UserState => {
	switch (action.type) {
		case 'REGISTER_USER':
			return {...state};
		default:
			return {...state};
	}
};

export default userReducer;
