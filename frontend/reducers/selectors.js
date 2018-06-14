export const getFilteredItems = (state) => {
  let result = [];
  let values = [];
  for(let id in state.entities.cartItems) {
    if (state.entities.cartItems[id].user_id === state.session.id 
      && !result.includes(state.entities.cartItems[id].product_id)) {
      result.push(state.entities.cartItems[id]);
    }
  }
  return result;
};




