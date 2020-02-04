import React from 'react';
import { connect } from "react-redux";
import GoogleLoginButton from "../components/components/login/GoogleLoginButton";
// import { User } from "../redux/state/UserState";
// import { registerUser } from "../redux/actions/userActions";
// import { Action, bindActionCreators, Dispatch } from "redux";
// import { AppState as State } from "../redux/reducers/rootReducer";

// interface AppProps {
//     registerUser: (user: User) => void
// }

// import { UserActionTypes } from "../redux/actions/types/UserActionTypes";
const App = () => {

    return (
        <GoogleLoginButton />
    )
};

// const mapStateToProps = (state: State) => ({
//     user: state.user
// });
//
// const mapDispatchToProps = (dispatch: Dispatch<Action<UserActionTypes>>) =>
//     bindActionCreators(
//         {
//             registerUser: registerUser,
//         },
//         dispatch
//     );


// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect()(App);
