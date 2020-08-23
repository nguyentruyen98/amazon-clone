import React from 'react'
import '../css/checkoutproduct.css'
import { useStateValue } from './StateProvider'
function CheckOutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeToBasket = () => {
    dispatch({
      type: 'REMOVE_TO_BASKET',
      id: id
    })
  }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>
          {title}
        </p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='checkoutProduct__rating'>
          {Array(rating).fill().map((_, i) => (
            <p>★</p>
          ))}
        </p>
        <button onClick={removeToBasket} className='checkoutProduct__button'>Remove to Basket</button>
      </div>
    </div>
  )
}

export default CheckOutProduct
