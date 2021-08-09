import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, Navbar, Cart, Checkout } from './components';

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
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);

    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    console.log(cart);

    return (
        <Router>
            <div>
                {/* navbar shopping cart totalItems retrieves data from API */}
                <Navbar totalItems={cart.total_items} />
                <Switch>

                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />

                    </Route>

                    <Route exact path="/cart">
                        <Cart cart={cart}
                            handleEmptyCart={handleEmptyCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleAddToCart={handleAddToCart}
                        />

                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout />
                    </Route>

                </Switch>
            </div>
        </Router>

    );
}

export default App;
