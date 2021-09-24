import React, {useState} from "react";
import SignIn from "./components/signin";
import useToken from '../useToken';

function SignInPage(){    
    
    const {setToken } = useToken();
    return (
        <div>
            <SignIn setToken={setToken} />
        </div>
    );
}

export default SignInPage;