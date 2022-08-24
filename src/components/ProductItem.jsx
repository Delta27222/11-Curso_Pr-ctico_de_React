import React, {useState} from 'react';

//Importando los estilos
import '@styles/ProductItem.scss';

//Importando los iconos
import icon_add_cart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {

	// Haremos uso de el HOOK de state
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={icon_add_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;