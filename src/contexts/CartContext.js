import React, {createContext, useState, useEffect } from 'react';
import { getAllProducts, getProductById, getProductByIdPrueba } from '../helpers/searchsFunctions';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    const addToCart = async (productId,productQty) => {

        let prodAlCart; 
        await getProductByIdPrueba(null, productId).then(response => prodAlCart = response);
            if(!cart.some(product => product.id === prodAlCart.id)) {
            prodAlCart.qty= productQty;
            prodAlCart.priceSubTotal = productQty * prodAlCart.data.price; 
            setCart([...cart, prodAlCart]);
            setSubTotal(subTotal+prodAlCart.priceSubTotal);
        } else {
                let productDetected = cart[cart.findIndex(product => product.id === prodAlCart.id)]
                productDetected.qty += productQty;
                productDetected.priceSubTotal = productDetected.qty * prodAlCart.data.price; 
            setCart([...cart]);
                setSubTotal(subTotal + (productQty*prodAlCart.data.price));
        }

    };

    const deleteFromCart = productId => {

        const cartWithoutProd = cart.filter(prod => prod.id !== productId);
        setCart(cartWithoutProd);
        let productDetected = cart[cart.findIndex(product => product.id === productId)]
        setSubTotal(subTotal - productDetected.priceSubTotal)

    };

    useEffect( ()=> {
        getAllProducts().then(response => setProducts(response));
        console.log(cart);
        console.log(subTotal);
    }, [cart, subTotal])

    return (
        <CartContext.Provider
        
            value={{
                cart,
                setCart,
                products,
                subTotal,
                addToCart,
                deleteFromCart
            }}

        >
            { children }

        </CartContext.Provider>
    );
};

export default CartContextProvider;