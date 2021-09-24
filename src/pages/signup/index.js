import {React} from "react";
import { useMetamask } from "use-metamask";

import EmailSignUp from "./components/emailsingup"
import MetaSignUp from "./components/metasignup"

import HeroSignUp from "./components/herosignup";


function SignUpPage(){
    const { metaState } = useMetamask();   

    return (
        <div>            
            <HeroSignUp />
            {metaState.isConnected
                ? <MetaSignUp />
                : <EmailSignUp />
            }            
        </div>
    );
    
}

export default SignUpPage;