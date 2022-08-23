import React from 'react';  //Comando ---->> IMR

//Importando los estilos
import '@styles/Login.scss';

const Login = () => {       //Comando --->> SFC   RAFCE  RSC
    return (
        <div className="login">
            <div className="form_container">
                <img src="/logos/logo_yard_sale.svg" alt="logo" className="logo"/>

                <h1 className="title">Create a new password</h1>

                <p className="subtitle">Enter a new password for your account</p>

                <form action="#" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"></input>

                    <label for="new_password" className="label">Password</label>
                    <input type="password" id="new_password" placeholder="*********" className="input input-password"></input>

                    <input type="submit" value="Confirm" className="primary-button login-button"></input>
                </form>
            </div>
        </div>
    );
}

export default Login;
