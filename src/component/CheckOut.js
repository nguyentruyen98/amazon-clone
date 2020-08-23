import React from 'react'
import { useStateValue } from './StateProvider';
import CheckOutProduct from './CheckOutProduct';
import '../css/checkout.css'
import SubTotal from './SubTotal';

function CheckOut() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg" alt="" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        ) : (
            <div>
              <h2 className='checkout__title'>Your Shopping Basket</h2>
              {basket.map(item => (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                ></CheckOutProduct>
              ))}
            </div>
          )}
      </div>
      {basket.length > 0 &&(
        <div className='checkout__right'>
          <h1><SubTotal></SubTotal></h1>
        </div>
      )}
    </div>
  )
}

export default CheckOut
