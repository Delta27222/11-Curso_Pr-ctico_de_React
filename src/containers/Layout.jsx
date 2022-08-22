import React from 'react';

//Importamos los componentes
import Header from '../components/Header'

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Header />
            {children}
        </div>
    );
}
export default Layout;
