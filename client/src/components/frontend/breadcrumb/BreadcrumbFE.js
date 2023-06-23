import React from 'react'
import './index.scss';

const BreadcrumbFE = () => {
  return (
    <div className='dc-breadcrumb'>
      <div className='dc-container'>
        <div className='row'>
            <div className='col-lg-12'>
              <ul className='d-flex dc-breadcrumb__list'>
                <li className='py-8'><a href="">Home</a></li>
                <li className='py-8'><a href="">Link 1</a></li>
                <li className='py-8'><a href="">Link 2</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbFE
