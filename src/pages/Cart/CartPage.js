import {useTitle} from '../../../src/hooks/useTitle'
import {CartEmpty} from './components/CartEmpty'
import {CartList} from './components/CartList'
import { useCart } from '../../context/'



export const CartPage = () => {

const {cartList} =useCart();
    useTitle(`Cart (${cartList.length})`)
  
     //dummy to check empty cart page and cart with items page 
  // cartList.length=2;
     return (
    <main>
        {cartList.length>0 ? <CartList/> : <CartEmpty/>}
    </main>
    )
    
}
