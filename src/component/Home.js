import React from 'react'
import '../css/home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <img className='home__image' src="https://miro.medium.com/max/5108/1*k1OZBUe6f8pzEbjlYfYZ9A.png" alt="" />
      <div className="home__row">
        <Product
          id='1'
          title='Điện thoại pro1'
          price={1000}
          rating={3}
          image='https://fptshop.com.vn/Uploads/Originals/2020/2/12/637170945536714482_ss-s20-plus-den-1.png'
        ></Product>
        <Product
          id='2'
          title='Điện thoại pro2'
          price={1100}
          rating={3}
          image='https://fptshop.com.vn/Uploads/Originals/2020/2/12/637170945536714482_ss-s20-plus-den-1.png'
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id='3'
          title='Điện thoại pro3'
          price={1200}
          rating={3}
          image='https://fptshop.com.vn/Uploads/Originals/2020/2/12/637170945536714482_ss-s20-plus-den-1.png'
        ></Product>
        <Product
          id='123'
          title='Điện thoại pro'
          price={1200}
          rating={3}
          image='https://fptshop.com.vn/Uploads/Originals/2020/2/12/637170945536714482_ss-s20-plus-den-1.png'
        ></Product>
        <Product
          id='123'
          title='Điện thoại pro'
          price={1200}
          rating={3}
          image='https://fptshop.com.vn/Uploads/Originals/2020/2/12/637170945536714482_ss-s20-plus-den-1.png'
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id='123'
          title='Điện thoại pro'
          price={1200}
          rating={3}
          image='https://fptshop.com.vn/Uploads/Originals/2020/2/12/637170945536714482_ss-s20-plus-den-1.png'
        ></Product>
      </div>
    </div>
  )
}

export default Home
