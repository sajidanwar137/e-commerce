import React from 'react'
import './index.scss';

const NavbarFE = () => {
  return (
    <div className='dc-main-menu'>
      <div className='dc-container'>
        <div className='row'>
            <div className='col-lg-12'>
              <div className='d-flex'>
                <ul className='d-flex dc-main-menu__list'>
                  <li className='py-8'><a href="">Home</a></li>
                  <li className='py-8'><a href="">Furniture</a></li>
                  <li className='py-8'><a href="">All Products</a></li>
                  <li className='py-8'><a href="">Shop</a></li>
                  <li className='py-8'><a href="">Mobile</a></li>
                  <li className='py-8'><a href="">Offer</a></li>
                  <li className='py-8'><a href="">Deal</a></li>
                  <li className='py-8'><a href="">Blog</a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarFE
