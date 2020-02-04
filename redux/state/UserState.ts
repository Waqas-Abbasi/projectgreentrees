export interface User {
	name: string;
	email: string;
	isLoggedIn: boolean;
}

export interface UserState {
	user: User;
}
