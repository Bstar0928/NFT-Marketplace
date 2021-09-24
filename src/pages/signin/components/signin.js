import React, {useState} from "react";
import PropTypes from 'prop-types';
import { useHistory,withRouter  } from "react-router-dom";

async function SignInUser(credentials){
	console.log(credentials)
	return fetch('http://localhost:8080/signin',{
		method:'POST',
		headers:{
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(credentials)
	}).then(data => data.json())
}

export default function SignIn({setToken}){
	let history = useHistory();

    const [email,setEmail] = useState();
	const [password,setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const res = await SignInUser({
			email,
			password
		});
		setToken({ token: res.token });
		window.open("profile", "_parent");
	}

	return (
		<section className="full-height relative no-top no-bottom vertical-center" data-bgimage="url(images/background/subheader-dark.jpg) top" data-stellar-background-ratio=".5">
			<div className="overlay-gradient t50">
				<div className="center-y relative">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
								<div className="spacer-10"></div>
								<h1>Create, sell or collect digital items.</h1>
								<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
							</div>
							
							<div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
							<div className="box-rounded padding40" data-bgcolor="#21273e">
								<h3 className="mb10">Sign In</h3>
								<p>Login using an existing account or create a new account <a href="/signup">here<span></span></a>.</p>
								<form name="contactForm" id='contact_form' className="form-border" onSubmit={handleSubmit}>

									<div className="field-set">
										<input type='text' onChange={e=>setEmail(e.target.value.toLowerCase())} className="form-control" placeholder="useremail"/>
									</div>										
									<div className="field-set">
										<input type='password' onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
									</div>										
									<div className="field-set">
										<button type='submit' value='Submit' className="btn btn-main btn-fullwidth color-2">Submit</button>
									</div>										
									<div className="clearfix"></div>										
									<div className="spacer-single"></div>									
									<ul className="list s3">
										<li>Login with:</li>
										<li><a href="#">Facebook</a></li>
										<li><a href="#">Google</a></li>
									</ul>                                        
								</form>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);

    
};
SignIn.propTypes = {
	setToken:PropTypes.func.isRequired
} 
