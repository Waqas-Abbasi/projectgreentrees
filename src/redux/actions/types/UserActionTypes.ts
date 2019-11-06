import {REGISTER_USER} from '../userActions';
import {User} from '../../state/UserState';

 interface RegisterUser {
	type: typeof REGISTER_USER,
	payload: User,
}

export type UserActionTypes = RegisterUser
