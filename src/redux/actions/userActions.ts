import {UserActionTypes} from './types/UserActionTypes';
import {User} from '../state/UserState';

export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (user: User): UserActionTypes => {
  return {
      type: REGISTER_USER,
      payload: user,
  }
};

export interface UserDispatchProps {
    registerUser: (user: User) => UserActionTypes
}
