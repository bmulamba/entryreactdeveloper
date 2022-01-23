import React, { Component } from 'react';
import Cart  from './pages/Cart';
import './Navbar.scss'
import { Link } from 'react-router-dom';

const options = [
    {
        id : 1,
        label : "$",
        value : "USD"
    },
    {
        id : 2,
        label : "&",
        value : "EUR"
    },
    {
        id : 3,
        label : "YR",
        value : "JPY"
    }
]
export default class Navbar extends Component {

    constructor(){
        super();
        this.state = {
            isHovered : false
        };

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState(prevState => {
            return {
                isHovered : !prevState.isHovered
            }
        })
    }

  render() {
    return <>
        <div className='navbar' >
            <div className='navbar-list'>
               <ul className="nav-links">
                   <li className="link active" >all</li>
                   <li className="link" >tech</li>
                   <li className="link" >cloths</li>
               </ul>
               <div className='link-bag'>
                 <i className="fa fa-shopping-bag " ></i>
               </div>
               <div className='nav-link-belt'>
                   <div className='nav-link-select'>
                       <select className='nav-select'>
                           {options.map((option) => (
                               <option className='nav-option' value={option.value} key={option.id} >{option.label} {option.value}</option>
                           ))}
                       </select>
                   </div>
                   <div className='nav-cart'>
                        <Link to="/cart" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}><i className='fa fa-shopping-cart' ></i>
                        <span className='nav-cart-quantity'>4</span></Link>
                   </div>
               </div>
            </div>
        </div>
        { this.state.isHovered  && <Cart />}
    </>;
  }
}
