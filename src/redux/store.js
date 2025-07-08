import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const loadCartFromStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        if (serializedCart === null) {
            return undefined;
        }
        return {
            cart: JSON.parse(serializedCart)
        };
    } catch (e) {
        console.log("Could not load cart from storage:", e);
        return undefined;
    }
};

const saveCartToStorage = (state) => {
    try {
        const serializedCart = JSON.stringify(state.cart);
        localStorage.setItem('cart', serializedCart);
    } catch (e) {
        console.log("Could not save cart to storage:", e);
    }
};

const preloadedState = loadCartFromStorage();

const store = configureStore({
    reducer: rootReducer,
    //preloadedState
});

// store.subscribe(() => {
//     saveCartToStorage(store.getState());
// });

export default store;