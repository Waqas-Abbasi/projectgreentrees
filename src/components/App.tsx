import React from 'react';
import '../styles/index.css';
import {connect} from 'react-redux';
import {registerUser} from '../redux/actions/userActions';
import {User} from '../redux/state/UserState';

interface AppProps {
	registerUser: (user: User) => void
}
class App extends React.Component<AppProps, void> {
	registerForm = () => {
		this.props.registerUser({
			name: 'Waqas',
			email: 'test@gmail.com'
		})
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

const mapDispatchToProps = {
	registerUser: registerUser,
}; 

//TODO Add InterfaceTypes
export default connect(null, mapDispatchToProps)(App);
