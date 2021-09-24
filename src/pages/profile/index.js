import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import useToken from '../useToken';
import Profile from "./components/profile";
import ProfileTitle from "./components/profiletitle";

function ProfilePage(){    
   
    let history = useHistory();

    const { token } = useToken();
    if (!token){
        history.push('signin')
    }
    

    return (
        <div>            
            <ProfileTitle/>
            <Profile token={token} />       
        </div>
    );
}

export default ProfilePage;