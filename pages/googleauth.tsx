import React, { useEffect } from 'react';
import { BACKEND_SERVER } from "../Constants";

const GoogleAuthPage = (props) => {

    useEffect(() => {
        fetch(BACKEND_SERVER + 'googleauth?code=' + props.query.code)
            .catch(err => console.log(err))
            .then(() => {
                //Set Cookies with UserInfo and Close window
                window.close()
            });
    }, []);

    return (<div/>);
};

GoogleAuthPage.getInitialProps = ({query}) => {
    return {query}
};

export default GoogleAuthPage;
