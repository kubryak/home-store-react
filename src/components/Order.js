import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export default class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./images/' + this.props.item.img} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price.toLocaleString('ru-RU')}₽</p>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}
