export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
    //reduce iterates though each item in basket 
  //?. is called optional chaining! to prevent from code breaking

//task of reducer to dispatch action from component to data layer or pushing and pulling data to and from the data layer!
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":

    //find index of matching item incase of same items multiple times the first one is returned
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //copy of orignial basket
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
