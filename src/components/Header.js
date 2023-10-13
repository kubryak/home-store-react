import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;

  props.orders.forEach(item => sum += item.price);

  return (
    <div>
      {props.orders.map(item => (
        <Order key={item.id} item={item} onDelete={props.onDelete} />
      ))}
      <p className='sum'>Сумма: {sum.toLocaleString('ru-RU')}₽</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>В корзине пока пусто</h2>
    </div>
  )
}

export default function Header(props) {
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
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
