import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }
    //obtain cart , set to state
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }
    //expecting 2 diff params product id and quantity, pass over to API and add to cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }


    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    console.log(cart);

    return (
        <div>
            {/* navbar shopping cart totalItems retrieves data from API */}
            <Navbar totalItems={cart.total_items} />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App;
