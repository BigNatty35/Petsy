import * as APIUtil from "../util/product_api_util";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_SEARCH_PRODUCTS = "RECEIVE_SEARCH_PRODUCTS";


export const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
};
export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  };
};

export const removeProduct = (id) => {
  return {
    type: RECEIVE_PRODUCT,
    id
  };
};

export const receiveSearchProducts = products => {
  return {
    type: RECEIVE_SEARCH_PRODUCTS,
    products
  };
};



export const fetchProducts = () => {
  return dispatch => {
    return APIUtil.fetchProducts().then(fetchedProducts => {
      return dispatch(receiveProducts(fetchedProducts));
    });
  };
};

export const fetchProduct = id => {
  return dispatch => {
    return APIUtil.fetchProduct(id).then(product => {
      return dispatch(receiveProduct(product));
    });
  };
};

export const createProduct = (product) => {
  return dispatch => {
    return APIUtil.createProduct(product).then(newProduct => {
      return dispatch(receiveProduct(newProduct));
    });
  };
};

export const deleteProduct = id => {
  return dispatch => {
    return APIUtil.deleteProduct(id).then(productId => {
      return dispatch(removeProduct(productId));
    });
  };
};


export const fetchSearchProduct = query => {
  return dispatch => {
    return APIUtil.fetchSearchProduct(query).then(searchProducts => {
      return dispatch(receiveSearchProducts(searchProducts));
    });
  };
};