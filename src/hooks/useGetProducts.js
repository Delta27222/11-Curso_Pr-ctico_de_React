import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {

    // Ahora haremos uso de una API, usando el hook useState y useEffect
    const[products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data)
    }, []);
    return products;
};

export default useGetProducts;