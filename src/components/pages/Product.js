import React, { Component } from 'react';
import './Product.scss'

export default class Product extends Component {
  render() {
    return <>
    <div className='product-section'>
      <div className='product-item'>
        <div className='side-item'>
          <span> <img src="images/laptop-1.jpg" alt='laptop' /> </span>
          <span> <img src="images/laptop-1.jpg" alt='laptop' /> </span>
          <span> <img src="images/laptop-1.jpg" alt='laptop' /> </span>
        </div>
        <div className='product-image'>
          <span> <img src="images/laptop-1.jpg" alt='laptop' /> </span>
        </div>
        <div className='product-text'>
          <h1>appolo</h1>
          <h2>running short</h2>
          <div className='product-size'>
            <span>size :</span>
            <ul>
              <li>xs</li>
              <li>s</li>
              <li>m</li>
              <li>l</li>
            </ul>
          </div>
          <div className='product-price'>
            <span>price : </span>
            <span>$50.00</span>
          </div>
          <div className='product-add-cart'>
            <button className='btn-add-to-cart'>add to cart</button>
          </div>
          <p>lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
        </div>
      </div>
    </div>
    </>;
  }
}
