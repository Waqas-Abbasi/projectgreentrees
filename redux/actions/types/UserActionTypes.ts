import { User } from '../../state/UserState';
import { LOGIN_USER, REGISTER_USER } from '../userActions';

interface RegisterUser {
	type: typeof REGISTER_USER;
	payload: User;
}

interface LoginUser {
	type: typeof LOGIN_USER;
	payload: User;
}

export type UserActionTypes = RegisterUser | LoginUser;
