import {React,useState,useEffect} from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";

async function ProfileUser(credentials){
	console.log(credentials)
	return fetch('http://localhost:8080/profile',{
		method:'POST',
		headers:{
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(credentials)
	}).then(data => data.json())
}
async function SaveProfile(credentials){

    return fetch('http://localhost:8080/saveprofile',{
        method:'POST',
		headers:{
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(credentials)
	}).then(data => data.json())
}

const BasicInfo = ({token}) => {

    const { connect,getAccounts, metaState } = useMetamask();   
    const [metamaskid,setMetaMaskID] = useState("")
    const [email,setEmail] = useState("")
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")

    useEffect(() => {      
         
        if (token) {                       
          (async () => {             
            
            console.log("send id to server",token)
            const res = await ProfileUser({
                token
            });
            console.log("profile response",res)
            if (res._id){
                setFirstName(res.firstname)
                setLastName(res.lastname)
                setEmail(res.email)
                setPhone(res.phone)
                setMetaMaskID(res.metamaskid)
            }
          })();
        }
    }, []);
    const handleBindBtn = async e => {
        e.preventDefault()

        if(!window.web3){
            window.open("https://metamask.io/download.html")      
            return
        }
        if (!metaState.isConnected) {
            (async () => {
                try {
                    await connect(Web3);
                    let account = await getAccounts();                    
                    setMetaMaskID(account[0].toLowerCase())
                    console.log("bind metamask id",metamaskid)
                } catch (error) {                                  
                    console.log(error);
                }
            })();
        }

    }
    const handleSaveBtn = async e => {
        e.preventDefault();
        console.log("save metamask id",metamaskid)
        const result = await SaveProfile({
            token,
            firstname,
            lastname,
            email,
            phone,
            metamaskid,            
            password
        });        
        
    }
    return(
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="spacer-10">
                </div>                        
                <form className="form-border">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="field-set">
                                <label>MetaMask ID:</label>
                                <input type='text' value={metamaskid} className="form-control" readOnly/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="field-set">
                                <label>First Name:</label>
                                <input type='text' value={firstname} onChange={e=>setFirstName(e.target.value)} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="field-set">
                                <label>Last Name:</label>
                                <input type='text' value={lastname} onChange={e=>setLastName(e.target.value)} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="field-set">
                                <label>Email:</label>
                                <input type='text' value={email} onChange={e=>setEmail(e.target.value)} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="field-set">
                                <label>Phone:</label>
                                <input type='text' value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="field-set">
                                <label>Password:</label>
                                <input type='text' value={password} onChange={e=>setPassword(e.target.value)}  className="form-control"/>
                            </div>
                        </div>                          
                    </div>
                    <div className="row">                                                                                      
                        <div className="col-md-4">
                            <button type='button' className="btn btn-main color-2" onClick={handleBindBtn}>Bind MetaMask</button>
                        </div>
                        <div className="col-md-4">
                            <button type='submit' className="btn btn-main color-2" onClick={handleSaveBtn}>Save Profile</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>  
    );
};

export default BasicInfo;