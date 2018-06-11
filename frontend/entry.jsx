import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from "./util/session_api_util";
import configureStore from "./store/store";
import Root from './components/root';
import {signup, login} from './actions/session_actions';
import {fetchProducts, fetchProduct} from "./actions/product_actions";
import { receiveProducts, receiveProduct } from "./util/product_api_util";
import { fetchCategory, receiveCategory} from "./actions/category_actions";


document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.fetchCategory = fetchCategory;
    window.receiveCategory = receiveCategory;
    window.fetchProducts = fetchProducts;
    window.receiveProducts = receiveProducts;
    window.fetchProduct = fetchProduct;
    window.receiveProduct = receiveProduct;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root );
});