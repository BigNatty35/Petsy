export const fetchCartItems = () => {
  return $.ajax({
    method: "GET",
    url: '/api/cart_items'
  });
};



export const createCartItem = (item) => {
  return $.ajax({
    method: "POST",
    url: '/api/cart_items',
    data: { item }
  });
};

export const fetchCartItem = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/cart_items/${id}`,
    data: { id }
  });
};



export const deleteCartItem = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${id}`
  });
};