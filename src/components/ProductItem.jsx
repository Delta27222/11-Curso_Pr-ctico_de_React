import React, {useContext} from 'react';

//Importando los estilos
import '@styles/ProductItem.scss';

//Importando los iconos
import icon_add_cart from '@icons/bt_add_to_cart.svg'

//Importamos el contexto
import AppContext from '@context/AppContext';

// const ProductItem = ({product}) => {

// 	const { addToCart } = useContext(AppContext);

// 	const handleClick = item => {
// 		addToCart(item);
// 	}

// 	return (
// 		<div className="ProductItem">
// 			<img src={product.images[0]} alt={product.title} />
// 			<div className="product-info">
// 				<div>
// 					<p>${product.price}</p>
// 					<p>{product.title}</p>
// 				</div>
// 				<figure onClick={() => handleClick(product)}>
// 					<img src={icon_add_cart} alt="" />
// 				</figure>
// 			</div>
// 		</div>
// 	);
// }

const ProductItem = ({product}) => {

	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.name} />
			<div className="product-info">
				<div>
					<p>${product.id}</p>
					<p>{product.name +' '+product.species}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={icon_add_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}


export default ProductItem;