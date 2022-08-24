import React, { useRef, useState } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
    //Hacemos uso de un useState para saber si mostramos un error en pantalla
    const [error, setError] = useState(false)

    //Hacemos uso del hook useRef
	const form = useRef(null);

    //Creamos una funcion que hara el trabajo de guardar los valores de los imputs
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
        if (data.usename =='' || data.password ==''){
            setError(!error);
        }
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					{error ? <h1 >ERROR MI PANA</h1> : null}	//TODO password o email incorrect
                    <button
						onClick={handleSubmit}
						className="primary-button login-button">
						Log in
					</button>
					<a href="/">Forgot my password</a>  
				</form>
				<button className="secondary-button signup-button">
					Sign up
				</button>
			</div>
		</div >
	);
}

export default Login;