import {User} from '../../state/UserState';
import {REGISTER_USER} from '../userActions';

 interface RegisterUser {
	type: typeof REGISTER_USER,
	payload: User,
}
export type UserActionTypes = RegisterUser
