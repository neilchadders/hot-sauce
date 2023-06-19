import { createContext, useState, useEffect } from 'react';

//import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils'; COMMENT OUT ONCE ADDED TO FIREBASE

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     addCollectionAndDocuments('collections', SHOP_DATA);  COMMENT OUT ONCE ADDED TO FIREBASE
    // }, []);

    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};