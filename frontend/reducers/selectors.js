export const getFilteredItems = (state) => {
  let result = [];
  for(let id in state.entities.cartItems) {
    if(state.entities.cartItems[id].user_id === state.session.id) {
      result.push(state.entities.cartItems[id]);
    }
  }
  return result;
};