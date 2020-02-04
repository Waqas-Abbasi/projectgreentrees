import { UserActionTypes } from '../actions/types/UserActionTypes';
import { REGISTER_USER } from '../actions/userActions';
import { UserState } from '../state/UserState';

const initialState: UserState = {
    user: {
        name: '',
        email: '',
        isLoggedIn: false
    }
};

const userReducer = (
    state = initialState,
    action: UserActionTypes
): UserState => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return {...state};
    }
};

export default userReducer;
