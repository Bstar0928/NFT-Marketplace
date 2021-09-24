import React,{useState} from "react";
import { useHistory } from "react-router-dom";

async function SignUpUser(register){
    return fetch('http://localhost:8080/emailsignup',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(register)
    }).then(data => data.json())
}
export default function EmailSignUp() {

    let history = useHistory();

    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [repassword, setRepassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await SignUpUser({
            firstname,
            lastname,
            email,
            phone,
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
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>First Name:</label>
                                        <input type='text' name='firstname' onChange={e=>setFirstName(e.target.value)} className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Last Name:</label>
                                        <input type='text' name='lastname' onChange={e=>setLastName(e.target.value)} className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Email:</label>
                                        <input type='text' name='email' onChange={e=>setEmail(e.target.value)} className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Phone:</label>
                                        <input type='text' name='email' onChange={e=>setPhone(e.target.value)} className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Password:</label>
                                        <input type='password' name='email' onChange={e=>setPassword(e.target.value)} className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Re-enter Password:</label>
                                        <input type='text' name='email' onChange={e=>setRepassword(e.target.value)} className="form-control"/>
                                    </div>
                                </div>                                                                                             
                                <div className="col-md-12">
                                    <div className="pull-left">
                                        <button type='submit' className="btn btn-main color-2">Register Now</button>
                                    </div>
                                    <div className='success'>Your message has been sent successfully.</div>
                                    <div className='error'>Sorry, error occured this time sending your message.</div>
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );

};
