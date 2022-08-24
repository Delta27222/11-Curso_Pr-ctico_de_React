import React from 'react';

//Importando los componentes
import ProductItem from '@components/ProductItem';

//Importando los estilos
import '@styles/ProductList.scss';

//Importamos los Hooks
import useGetProducts from '@hooks/useGetProducts';

//Link de la API
const API = 'https://api.escuelajs.co/api/v1/products?limit=40&offset=1';

const ProductList = () => {
	const  products = useGetProducts(API);
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
