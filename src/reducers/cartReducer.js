export const cartReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
// reducer
case "ADD_TO_CART":
  return {
    ...state,
    cartList: [...state.cartList, payload.product],
    total: state.total + payload.product.price
  };

        case "REMOVE_FROM_CART":
            return {...state,cartList:payload.products,total:payload.total};

        case "CLEAR_CART":
            return {...state,cartList:[],total:payload.total=0};


            default:
                throw new Error(`Unknown action type: ${type}`);
}
}