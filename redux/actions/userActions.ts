import { User } from "../state/UserState";
import { UserActionTypes } from "./types/UserActionTypes";
import { Dispatch } from "redux";

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (user: User) => (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({
        type: REGISTER_USER,
        payload: user,
    })
};
