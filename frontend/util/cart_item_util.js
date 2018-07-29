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

export const deleteCartItems = (itemIds) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cart_items/destroy_all`,
    data: {itemIds}
  });
};

export const updateCartItem = (item) => {
  return $.ajax({
    method: "PATCH", 
    url: `/api/cart_items/${item.id}`,
    data: {item}
  });
};