import React from 'react';

//Importamos los componentes
import Header from '../components/Header'
import ProductList from '../containers/ProductList';

const Home = () => {
	return (
		<>
			<Header />
			<h1>Voy por el vidio 15 del curso</h1>
			<ProductList />
		</>
	);
}

export default Home;