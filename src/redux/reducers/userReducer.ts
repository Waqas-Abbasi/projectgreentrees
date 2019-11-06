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
			state.user.name = 'Waqas';
			return {...state};
		default:
			return {...state};
	}
};

export default userReducer;
