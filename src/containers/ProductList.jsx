import React from 'react';

//Importando los componentes
import ProductItem from '@components/ProductItem';

//Importando los estilos
import '@styles/ProductList.scss';

//Importamos los Hooks
import useGetProducts from '@hooks/useGetProducts';

//Link de la API
const API = 'https://api.escuelajs.co/api/v1/products';

const API2 = 'https://rickandmortyapi.com/api/character';


const ProductList = () => {
	const  products = useGetProducts(API2); 	//const  products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product = {product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
