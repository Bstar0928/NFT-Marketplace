import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useMetamask } from "use-metamask";

async function SignUpUser(register){
    
    return fetch('http://localhost:8080/metasignup',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(register)
    }).then(data => data.json())    
}

export default function MetaSignUp() {

    let history = useHistory();        
    const [password, setPassword] = useState();
    const [repassword, setRepassword] = useState();

    const { getAccounts, metaState } = useMetamask(); 
    const [ metamaskid, setMetamaskid] = useState("")
    const [ errormsg, setErrorMessage] = useState("")

    useEffect(() => {

        if (metaState.isAvailable) {
          (async () => {
            try {             
                let account = await getAccounts();
                setMetamaskid(account[0].toLowerCase())                
            } catch (error) {
              
              console.log(error);
            }
          })();
        }
    }, []);
   
    const handleSubmit = async e => {
        e.preventDefault();

        if (password != repassword)
            return
        const token = await SignUpUser({
            metamaskid,
            password
        });
        console.log("sign uped ",token)
        history.push('signin')
    }
    return (
        <section aria-label="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h3>Don't have an account? Register now.</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        
                        <div className="spacer-10"></div>                        
                        <form name="contactForm" id='contact_form' className="form-border" onSubmit={handleSubmit}>
                            <div >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>MetaMask Address:</label>
                                            <input type='text' name='email'  value={metamaskid} className="form-control" readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Password:</label>
                                            <input type='password' name='password' onChange={e=>setPassword(e.target.value)} className="form-control" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Confirm Password:</label>
                                            <input type='password' name='repassword' onChange={e=>setRepassword(e.target.value)} className="form-control" required/>
                                        </div>
                                    </div>       
                                </div>
                                <div className="row">                                                                                      
                                    <div className="col-md-12">
                                        <div className="pull-left">
                                            <button type='submit' className="btn btn-main color-2">Register Now</button>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>        
                        </form>                           
                    </div>
                </div>
            </div>
        </section>
    );

};
