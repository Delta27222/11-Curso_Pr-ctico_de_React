import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Importando los componentes
import ProductItem from '@components/ProductItem';

//Importando los estilos
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

// Ahora haremos uso de una API, usando el hook useState y useEffect

	const[products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data)
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
