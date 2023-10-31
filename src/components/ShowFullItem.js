import React, { Component } from 'react'
import deleteIcon from '../images/delete-icon.svg'

export default class ShowFullItem extends Component {

  render() {
    return (
      <div className='full-item'>
        <div>
          <img className='delete-icon' src={deleteIcon} onClick={() => this.props.onShowItem(this.props.item)} />
          <img className='full-item__img' src={'./images/' + this.props.item.img} alt={this.props.item.title} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.description}</p>
          <strong>{this.props.item.price.toLocaleString('ru-RU')}₽</strong>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}
