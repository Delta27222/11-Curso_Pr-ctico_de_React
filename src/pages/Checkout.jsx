import React from 'react';

//Importando los componentes
import OrderItem from '@components/OrderItem';

//Importando los estilos
import '@styles/Checkout.scss';

const Checkout = () => {
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export default Checkout;