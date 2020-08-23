export const initialState = {
  basket: [],
  user: null,

}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }

    case 'REMOVE_TO_BASKET':
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      else {
        console.warn(`Can not remove product (id: ${action.id})`)
      }
      return {
        ...state,
        basket: newBasket
      }
    case 'SET_USER':
      return{
        ...state,
        user:action.user
      }
    default:
      return state;

  }

}
export default reducer;