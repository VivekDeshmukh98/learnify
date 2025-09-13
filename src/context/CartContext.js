import {  createContext,useContext } from "react"
import { useReducer } from "react";
import { cartReducer } from "../reducers";

const cartInitialState={
    cartList:[],
    total:0
}

const CartContext=createContext(cartInitialState);


export const CartProvider=({children})=>{
const[state,dispatch]=useReducer(cartReducer,cartInitialState);

function addToCart(product){
  dispatch({ type: "ADD_TO_CART", payload: { product } });
}


function removeFromCart(product){
   const updatedList = state.cartList.filter((item) => item.id !== product.id);
   const updatedTotal = state.total - product.price;
   dispatch({
     type: "REMOVE_FROM_CART",
     payload: {
       products: updatedList,
       total: updatedTotal
     }
   });
}

function clearCart(){
    dispatch({type:"CLEAR_CART"});
}

const value={
    cartList:state.cartList,
    total:state.total,
    addToCart,
    removeFromCart,
    clearCart
}




    return (
        <CartContext.Provider value={value}>
            {children }
        </CartContext.Provider>
    )
}  


export const useCart=()=>{
    const context=useContext(CartContext);
    return context;
}
