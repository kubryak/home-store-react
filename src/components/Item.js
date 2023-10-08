import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./images/' + this.props.item.img} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <strong>{this.props.item.price.toLocaleString('ru-RU')}₽</strong>
        <div className='add-to-cart'>+</div>
      </div>
    )
  }
}

export default Item