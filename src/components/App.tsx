import React from 'react';
import '../styles/index.css';
import {connect} from 'react-redux';
import {registerUser, UserDispatchProps} from '../redux/actions/userActions';
import {User, UserState} from '../redux/state/UserState';
import {Action, bindActionCreators, Dispatch} from 'redux';
import {UserActionTypes} from '../redux/actions/types/UserActionTypes';

interface AppState {
	user: User
}

type AppProps = UserDispatchProps;

class App extends React.Component<AppProps, AppState> {
	registerForm = () => {
		this.props.registerUser({
			name: 'Waqas',
			email: 'test@gmail.com'
		});
	};

	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<button onClick={this.registerForm}>Click Me!</button>
			</div>
		);
	}
}

const mapStateToProps = (state: UserState, ownProps: AppProps) => ({
	user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch<Action<UserActionTypes>>) =>
	bindActionCreators(
		{
			registerUser: registerUser,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(App);
