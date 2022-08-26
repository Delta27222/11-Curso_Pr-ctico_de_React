import React, {useState, useContext} from 'react';

//Importando los estilos
import '@styles/Header.scss';

//Importamos los componentes
import Menu from '@components/Menu';

//Importamos las imagenes, los iconos y los logos
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

//Importamos nuestro contexto
import AppContext from '@context/AppContext'

const Header = () => {

	//Creamos nuestra constaste del estado del contexto
	const {state} = useContext(AppContext);

	// Haremos uso de el HOOK de state
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}
    return (
        <nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						angelhernandez@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length <= 9 ? state.cart.length : '+9'}</div> : null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu /> : null}  {/* {toggle && <Menu/>} esta seria otra manera de poder hacerlo*/} 
		</nav>
    );
};

export default Header;