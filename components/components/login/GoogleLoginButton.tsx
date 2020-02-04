import React from 'react';
import { BACKEND_SERVER } from "../../../Constants";

const GoogleLoginButton = () => {

    const login = async () => {

        const googleUrlReq = await fetch(BACKEND_SERVER + 'googleauthurl');
        const googleUrlResp = await googleUrlReq.json();

        const popupWindow = window.open(googleUrlResp.url,
            'popUpWindow',
            'height=500, width=400,left=200, top=150, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no, status=yes');

        const pollTimer = window.setInterval(function() {
            if (popupWindow.closed !== false) { // !== is required for compatibility with Opera
                window.clearInterval(pollTimer);
               //DO SOMETHING WHEN POPUP IS CLOSED
            }
        }, 200)
    };

    return (
        <button onClick={login}>Google Login</button>
    );
};

export default GoogleLoginButton;
