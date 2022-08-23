import React from 'react';

//Importamos los componentes
import ProductInfo from '@components/ProductInfo';

//Importamos los estilos
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;