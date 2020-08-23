import React from 'react';
import '../css/subtotal.css';
import { useStateValue } from './StateProvider';
const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0)

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <p>Subtotal ({basket.length} item):$ {getBasketTotal(basket)}</p>
      <small className='subtotal__gift'>
        <input type="checkbox" />This order contains a gift
      </small>
      <button>Process to Checkout</button>
    </div>
  )
}

export default SubTotal
