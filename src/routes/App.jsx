import React, { useContext } from 'react';

//Importando recursos de REACT REUTER DOM
import {BrowserRouter,Routes,Route } from 'react-router-dom'

//Importando Pages
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';

//Importando los container
import Layout from '@containers/Layout';

//Importando los estilos
import '@styles/global.css';

//Importamos los contexto
import AppContext from '@context/AppContext';

//Importamos los hook
import useInitialState from '@hooks/useInitialState'

const App = () => {
	const initialState = useInitialState(); /*Funcion que retonra el state y el add to cart*/
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/password-recovery" element={<PasswordRecovery />} />
						<Route path="/send-email" element={<SendEmail />} />
						<Route path="/new-password" element={<NewPassword />} />
						<Route path="/account" element={<MyAccount />} />
						<Route path="/signup" element={<CreateAccount />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/orders" element={<Orders />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>

		</AppContext.Provider>
	);
}

export default App;


