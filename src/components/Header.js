import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>Home Store</span>
        <ul className='nav'>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopping-cart-button ${cartOpen && 'active'}`} />
        
        {cartOpen && (
          <div className='shop-cart'>

          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
