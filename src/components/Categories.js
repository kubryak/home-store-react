import React, { Component } from 'react'

export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Все товары'
        },
        {
          key: 'table',
          name: 'Столы'
        },
        {
          key: 'wardrobe',
          name: 'Шкафы'
        },
        {
          key: 'bed',
          name: 'Кровати'
        },
        {
          key: 'sofa',
          name: 'Диваны'
        },
        {
          key: 'nightstand',
          name: 'Тумбочки'
        },
        {
          key: 'mirror',
          name: 'Зеркала'
        },
      ]
    }
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}
