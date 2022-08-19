import React from 'react';
import '../style/global.css';

//Importando containers
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Recovery_password from '../containers/Recovery_password';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

//Importando recursos de REACT REUTER DOM
import {BrowserRouter,Routes,Route } from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/recovery_password' element={<Recovery_password/>}/>
                    <Route path = "*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;


