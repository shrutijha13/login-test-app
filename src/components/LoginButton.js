import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    let login;
    
    if (!isAuthenticated) {
        login =  <button onClick={() => loginWithRedirect()}> Log-In </button>;
    }
    else {
        login = "";
    }
    return (
        <div>
            {login}
        </div>
    )
}

export default LoginButton;